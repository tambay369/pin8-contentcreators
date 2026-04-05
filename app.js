// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
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

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            }
        });
        
        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ===== FORM SUBMISSION =====
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        const btn = this.querySelector('button[type="submit"]');
        btn.textContent = 'Request Sent. We\'ll reply within 24 hours. 🙏';
        btn.style.background = '#4CAF50';
        btn.disabled = true;
    });
}

// ===== CONSOLE LOG =====
console.log('✅ PIN8 PRIME SPINE SYSTEM Loaded');
console.log('🏛️ PARIAH INFINOVATION - PIN8 IT SOLUTIONS');
console.log('🔒 Creator Node Pricing v1.0 • Fair. Right. Just.');
