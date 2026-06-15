/* ============================================================
   OM SAI HOUSEKEEPING — CONTRACT FORM JS
   Google Apps Script: Contract_Requests Sheet
   ============================================================ */

const CONTRACT_API = 'https://script.google.com/macros/s/AKfycbyX9qOYpvRkvsQ4F2bkWMPhviksMz7fzLtGL6JUtMQiBjixp5MKTH25hpJx4J2z3eIuHA/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contractForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const successEl = document.querySelector('.form-success');

    // Collect form data
    const data = {
      companyName:    form.companyName?.value?.trim(),
      contactPerson:  form.contactPerson?.value?.trim(),
      email:          form.email?.value?.trim(),
      phone:          form.phone?.value?.trim(),
      businessType:   form.businessType?.value?.trim(),
      serviceNeeded:  form.serviceNeeded?.value?.trim(),
      staffRequired:  form.staffRequired?.value?.trim(),
      location:       form.location?.value?.trim(),
      address:        form.address?.value?.trim(),
      startDate:      form.startDate?.value?.trim(),
      frequency:      form.frequency?.value?.trim(),
      message:        form.message?.value?.trim(),
      formType:       'contract',
      submittedAt:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Basic validation
    const required = ['companyName','contactPerson','email','phone','serviceNeeded','staffRequired','location'];
    for (const field of required) {
      if (!data[field]) {
        showNotification('Please fill in all required fields.', 'error');
        form.querySelector(`[name="${field}"]`)?.focus();
        return;
      }
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(data.phone.replace(/\s+/g,''))) {
      showNotification('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Submitting…';

    try {
      const params = new URLSearchParams(data);
      const response = await fetch(`${CONTRACT_API}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      // no-cors → treat as success
      form.reset();
      form.style.display = 'none';
      if (successEl) successEl.classList.add('visible');
      showNotification('Your contract request has been sent successfully!', 'success');

    } catch (err) {
      console.error('Form submission error:', err);
      showNotification('Something went wrong. Please try calling us directly.', 'error');
      btn.disabled = false;
      btn.textContent = 'Submit Contract Request';
    }
  });
});