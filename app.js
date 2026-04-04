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

// Form submission
function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const platform = document.getElementById('platform').value;
    const followers = document.getElementById('followers').value;
    const message = document.getElementById('message').value;

    // Save to localStorage
    const leadData = {
        name, email, phone, platform, followers, message,
        stage: 'creator_discovery_request',
        timestamp: new Date().toISOString()
    };

    const leads = JSON.parse(localStorage.getItem('pin8_creator_leads') || '[]');
    leads.push(leadData);
    localStorage.setItem('pin8_creator_leads', JSON.stringify(leads));

    console.log('💾 Creator Lead Saved:', leadData);

    alert('Thank you ' + name + '. Your request has been received. We will reach out within 48 hours to schedule your alignment call.');
    e.target.reset();
}

// Console commands
console.log('%c PIN8 CREATOR LEADS', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%c Type viewCreatorLeads() to see collected data', 'color: #888;');

function viewCreatorLeads() {
    const leads = JSON.parse(localStorage.getItem('pin8_creator_leads') || '[]');
    console.table(leads);
    return leads;
}

// Add scroll animation to cards
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

document.querySelectorAll('.feature, .card, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// FAQ Toggle
function toggleFaq(el) {
    el.classList.toggle('active');
    const answer = el.nextElementSibling;
    answer.classList.toggle('show');
}
