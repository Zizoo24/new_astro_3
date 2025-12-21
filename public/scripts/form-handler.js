// Contact Form Handler for OnlineTranslation.ae
// Sends form submissions via Formspree with WhatsApp fallback

const WHATSAPP_NUMBER = '971508620217';
const THANK_YOU_PAGE = '/thank-you/';

// IMPORTANT: Replace with your Formspree form ID
// 1. Go to https://formspree.io and sign up (free)
// 2. Create a new form with email: info@onlinetranslation.ae
// 3. Copy your form ID (e.g., 'xyzabcde') and paste it below
const FORMSPREE_ID = 'YOUR_FORM_ID';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

// Contact Form Submission Handler
async function submitContactForm(formData) {
  // Add source page to form data
  formData.append('_source_page', window.location.href);

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await response.json();

    if (response.ok) {
      // Redirect to thank you page
      window.location.href = THANK_YOU_PAGE;
      return {
        success: true,
        redirect: true,
        message: 'Redirecting...'
      };
    }

    // If Formspree returns an error
    console.error('Formspree error:', result);
    return redirectToWhatsApp(Object.fromEntries(formData));

  } catch (error) {
    console.error('Form submission error:', error);
    // Network error - fallback to WhatsApp
    return redirectToWhatsApp(Object.fromEntries(formData));
  }
}

// WhatsApp fallback function
function redirectToWhatsApp(data) {
  const name = data.name || '';
  const service = data.service || data.document_type || '';
  const message = data.message || data.text || '';

  const serviceLabel = service ? `Service: ${service.replace(/_/g, ' ')}. ` : '';
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm ${name}. ${serviceLabel}${message}`.trim()
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');

  return {
    success: true,
    message: 'Redirecting to WhatsApp...',
    redirect: true
  };
}

// Initialize form handlers on page load
document.addEventListener('DOMContentLoaded', function() {
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach(function(form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const resultDiv = form.querySelector('#formResult') || form.querySelector('.form-result') || document.getElementById('formResult');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : 'Send';

      // Show loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      }
      if (resultDiv) resultDiv.innerHTML = '';

      // Submit the form
      const result = await submitContactForm(formData);

      // Display result
      if (resultDiv && !result.redirect) {
        if (result.success) {
          resultDiv.innerHTML = `
            <div class="form-success" style="background: #d4edda; color: #155724; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
              <i class="fas fa-check-circle"></i>
              <span>${result.message}</span>
            </div>
          `;
          form.reset();
        } else {
          resultDiv.innerHTML = `
            <div class="form-error" style="background: #f8d7da; color: #721c24; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
              <i class="fas fa-exclamation-circle"></i>
              <span>${result.message}</span>
              <br><br>
              <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank"
                 style="display: inline-flex; align-items: center; gap: 0.5rem; background: #25d366; color: white; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none;">
                <i class="fab fa-whatsapp"></i> Contact via WhatsApp
              </a>
            </div>
          `;
        }
      }

      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  });
});
