// PIN8 CONTENT CREATORS SYSTEM
// Clean. Simple. Premium.

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// FAQ Toggle
function toggleFaq(el) {
    el.classList.toggle('active');
    el.nextElementSibling.classList.toggle('show');
}

// Form Submission Handler
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYou');

if (form) {
    form.addEventListener('submit', function(e) {
        // Let FormSubmit.co handle the submission
        // After submission, show thank you message
        setTimeout(() => {
            form.style.display = 'none';
            thankYou.style.display = 'block';
            window.scrollTo({
                top: form.offsetTop - 100,
                behavior: 'smooth'
            });
        }, 1000);
    });
}

// Check if redirected from form submission
if (window.location.hash === '#thankyou') {
    if (form) form.style.display = 'none';
    if (thankYou) thankYou.style.display = 'block';
    window.location.hash = '';
}

console.log('PIN8 Creator System Loaded');
console.log('Form submissions → inquiry.pin8@gmail.com');
