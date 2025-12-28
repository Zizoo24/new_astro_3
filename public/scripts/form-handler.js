// Contact Form Handler for OnlineTranslation.ae
// Formspree integration with WhatsApp fallback

// Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykgddbe';

// Contact Form Submission Handler via Formspree
async function submitToFormspree(formData, _form) {
    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Redirect to thank you page on success
            window.location.href = '/thank-you/';
            return {
                success: true,
                message: 'Message sent successfully! Redirecting...'
            };
        } else {
            const data = await response.json();
            if (data.errors) {
                return {
                    success: false,
                    message: data.errors.map(e => e.message).join(', ')
                };
            }
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Formspree submission error:', error);
        // Fallback to WhatsApp
        return fallbackToWhatsApp(formData);
    }
}

// WhatsApp fallback
function fallbackToWhatsApp(formData) {
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const message = formData.get('message') || '';

    let text = `Hi, I'm ${name}.\n`;
    if (email) text += `Email: ${email}\n`;
    if (phone) text += `Phone: ${phone}\n`;
    if (message) text += `\n${message}`;

    window.open(`https://wa.me/971508620217?text=${encodeURIComponent(text)}`, '_blank');
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
            const resultDiv = form.querySelector('#formResult') || document.getElementById('formResult');
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';

            // Show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
            if (resultDiv) resultDiv.innerHTML = '';

            // Add source page to form data
            formData.append('_source', window.location.href);

            // Submit to Formspree
            const result = await submitToFormspree(formData, form);

            // Display result
            if (resultDiv && !result.redirect) {
                if (result.success) {
                    resultDiv.innerHTML = `
                        <div class="form-success">
                            <i class="fas fa-check-circle"></i>
                            <span>${result.message}</span>
                        </div>
                    `;
                    form.reset();
                } else {
                    resultDiv.innerHTML = `
                        <div class="form-error">
                            <i class="fas fa-exclamation-circle"></i>
                            <span>${result.message}</span>
                            <a href="https://wa.me/971508620217" target="_blank" class="whatsapp-link">
                                <i class="fab fa-whatsapp"></i> Contact via WhatsApp
                            </a>
                        </div>
                    `;
                }
            }

            // Reset button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    });
});
