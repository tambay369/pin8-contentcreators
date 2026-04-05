// Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn-submit');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you! We\'ll get back to you within 24 hours. 🙏');
        this.reset();
        submitBtn.textContent = 'Get Free Consultation';
        submitBtn.disabled = false;
    }, 1500);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

console.log('✅ PIN8 PRIME SPINE SYSTEM Loaded');
console.log('🏛️ PARIAH INFINOVATION - PIN8 IT SOLUTIONS');
