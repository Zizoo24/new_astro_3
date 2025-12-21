// Contact Form Handler for OnlineTranslation.ae
// Sends form submissions via API with WhatsApp fallback

const WHATSAPP_NUMBER = '971508620217';
const API_ENDPOINT = '/api/contact/';
const THANK_YOU_PAGE = '/thank-you/';

// Contact Form Submission Handler
async function submitContactForm(formData) {
  const data = {
    name: formData.get('name') || '',
    email: formData.get('email') || '',
    phone: formData.get('phone') || '',
    message: formData.get('message') || formData.get('text') || '',
    service: formData.get('service') || '',
    document_type: formData.get('document_type') || '',
    source_page: window.location.href
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      // Redirect to thank you page
      window.location.href = THANK_YOU_PAGE;
      return {
        success: true,
        redirect: true,
        message: 'Redirecting...'
      };
    }

    // If API suggests WhatsApp fallback
    if (result.fallback === 'whatsapp') {
      return redirectToWhatsApp(data);
    }

    return {
      success: false,
      message: result.message || 'Failed to send message. Please try WhatsApp.'
    };

  } catch (error) {
    console.error('Form submission error:', error);
    // Network error - fallback to WhatsApp
    return redirectToWhatsApp(data);
  }
}

// WhatsApp fallback function
function redirectToWhatsApp(data) {
  const name = data.name || '';
  const service = data.service || data.document_type || '';
  const message = data.message || '';

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
