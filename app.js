// PIN8 CONTENT CREATORS SYSTEM

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// FAQ Toggle Functionality
function toggleFaq(el) {
    el.classList.toggle('active');
    const answer = el.nextElementSibling;
    answer.classList.toggle('show');
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature, .card, .price-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Console Commands for Lead Tracking
console.log('%c PIN8 CREATOR LEADS', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%c Form submissions sent directly to: inquiry.pin8@gmail.com', 'color: #888;');
console.log('%c Check your email inbox after first submission to activate FormSubmit.co', 'color: #888;');

// Function to view leads from localStorage (backup)
function viewCreatorLeads() {
    const leads = JSON.parse(localStorage.getItem('pin8_creator_leads') || '[]');
    console.table(leads);
    return leads;
}

// Auto-save form data to localStorage (backup)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        const formData = new FormData(form);
        const leadData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            platform: formData.get('platform'),
            followers: formData.get('followers'),
            message: formData.get('message'),
            stage: 'creator_discovery_request',
            timestamp: new Date().toISOString()
        };

        // Save to localStorage as backup
        const leads = JSON.parse(localStorage.getItem('pin8_creator_leads') || '[]');
        leads.push(leadData);
        localStorage.setItem('pin8_creator_leads', JSON.stringify(leads));

        console.log('💾 Creator Lead Saved (Backup):', leadData);
    });
}
