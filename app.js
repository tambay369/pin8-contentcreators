// PIN8 CONTENT CREATORS SYSTEM

// Smooth scroll
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

// Show thank you message if redirected from form
if (window.location.hash === '#thankyou') {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
    window.location.hash = '';
}

console.log('PIN8 Creator System Loaded');
