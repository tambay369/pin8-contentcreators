// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.99)';
        navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.15)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission enhancement
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Request Sent. We\'ll reply within 24 hours. 🙏';
        submitBtn.style.background = '#4CAF50';
        submitBtn.disabled = true;
    });
}

console.log('✅ PIN8 PRIME SPINE SYSTEM Loaded');
console.log('🏛️ PARIAH INFINOVATION - PIN8 IT SOLUTIONS');
console.log('🔒 Creator Node Pricing v1.0 • Fair. Right. Just.');
