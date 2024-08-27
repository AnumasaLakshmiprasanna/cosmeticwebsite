document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const contactForm = document.getElementById('contact-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                event.preventDefault();
                alert('Passwords do not match.');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Additional client-side validation if needed
        });
    }
});
