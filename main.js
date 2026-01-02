// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Simple Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // In a real app, this would be an API call
            console.log('Form Submitted:', data);
            
            // Visual feedback
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Request Sent!';
            btn.style.backgroundColor = '#28a745';
            btn.disabled = true;
            
            setTimeout(() => {
                contactForm.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
                alert('Thank you! Your request has been sent to the LumSign team.');
            }, 1500);
        });
    }
});
const slides = document.querySelectorAll('.image-slider .slide');
let currentSlide = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
}

