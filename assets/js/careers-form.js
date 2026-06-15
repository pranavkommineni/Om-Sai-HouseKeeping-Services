/* ============================================================
   OM SAI HOUSEKEEPING — CAREERS FORM JS
   Google Apps Script: Job_Applications Sheet
   ============================================================ */

const CAREERS_API = 'https://script.google.com/macros/s/AKfycbxDH3qT7TKaDRxFDuICJAQ7GDDP_LIa9phy6x9Vdz8JIpxrJKVARi5bqeTl_bT5gy2YSQ/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('careersForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const successEl = document.querySelector('.form-success');

    const data = {
      applicantName:  form.applicantName?.value?.trim(),
      gender:         form.gender?.value?.trim(),
      age:            form.age?.value?.trim(),
      phone:          form.phone?.value?.trim(),
      email:          form.email?.value?.trim(),
      experience:     form.experience?.value?.trim(),
      location:       form.location?.value?.trim(),
      preferredArea:  form.preferredArea?.value?.trim(),
      jobType:        form.jobType?.value?.trim(),
      qualification:  form.qualification?.value?.trim(),
      languages:      form.languages?.value?.trim(),
      availability:   form.availability?.value?.trim(),
      message:        form.message?.value?.trim(),
      formType:       'career',
      submittedAt:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    const required = ['applicantName','gender','phone','experience','location','jobType'];
    for (const field of required) {
      if (!data[field]) {
        showNotification('Please fill in all required fields.', 'error');
        form.querySelector(`[name="${field}"]`)?.focus();
        return;
      }
    }

    if (data.phone && !/^\d{10}$/.test(data.phone.replace(/\s+/g,''))) {
      showNotification('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Submitting…';

    try {
      const params = new URLSearchParams(data);
      await fetch(`${CAREERS_API}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      form.reset();
      form.style.display = 'none';
      if (successEl) successEl.classList.add('visible');
      showNotification('Your application has been submitted! We will contact you soon.', 'success');

    } catch (err) {
      console.error('Application submission error:', err);
      showNotification('Something went wrong. Please call us to apply.', 'error');
      btn.disabled = false;
      btn.textContent = 'Submit Application';
    }
  });
});