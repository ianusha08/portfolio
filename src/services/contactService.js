import { personalInfo } from '../data/portfolioData.js';

/**
 * Validates the contact form payload.
 * Returns { isValid: boolean, errors: { name?: string, email?: string, message?: string } }
 */
export function validateContactForm({ name, email, message }) {
  const errors = {};
  const trimmedName = (name || '').trim();
  const trimmedEmail = (email || '').trim();
  const trimmedMessage = (message || '').trim();

  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 6) {
    errors.message = 'Message must be at least 6 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submits the contact note to the user's email via configured endpoint / service.
 */
export async function sendContactNote({ name, email, message }) {
  const customEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL || personalInfo.email;

  // 1. Custom Endpoint (e.g. Formspree or custom webhook API)
  if (customEndpoint) {
    const response = await fetch(customEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `[Portfolio Inquiry] from ${name.trim()}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}. Please try again.`);
    }
    return await response.json().catch(() => ({ success: true }));
  }

  // 2. Web3Forms if access key provided
  if (web3formsKey) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: `[Portfolio Inquiry] from ${name.trim()}`,
        from_name: name.trim(),
      }),
    });

    const data = await response.json();
    if (!response.ok || data.success === false) {
      throw new Error(data.message || 'Delivery failed via Web3Forms.');
    }
    return data;
  }

  // 3. Direct Mail Relay (FormSubmit - sends directly to recipientEmail)
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      _subject: `[Portfolio Quick Note] from ${name.trim()} (${email.trim()})`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({ success: response.ok }));
  if (!response.ok || data.success === 'false' || data.success === false) {
    throw new Error(data.message || 'Failed to deliver message. Please contact directly via email.');
  }

  return data;
}
