// ===== FORM HANDLING =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Here you would normally send to your backend
    // For now, simulate success
    setTimeout(() => {
        // Show success message
        alert('Thank you! We\'ll get back to you within 24 hours. 🙏');
        
        // Reset form
        this.reset();
        
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // In production, integrate with FormSubmit or similar:
        /*
        fetch('https://formsubmit.co/ajax/inquiry.pin8@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you! We\'ll get back to you within 24 hours.');
            this.reset();
        })
        .catch(error => {
            alert('Something went wrong. Please email us directly at inquiry.pin8@gmail.com');
        });
        */
    }, 1500);
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== PROGRESS BAR ANIMATION =====
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress');
            if (progressBar) {
                progressBar.style.transition = 'width 1s ease';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.bonus-card').forEach(card => {
    observer.observe(card);
});

// ===== STATS COUNTER ANIMATION =====
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('₱')) {
                    // Handle currency
                    const num = parseInt(text.replace(/\D/g, ''));
                    if (!isNaN(num)) {
                        animateValue(stat, 0, num, 2000);
                    }
                } else if (text.includes('+')) {
                    // Handle numbers with +
                    const num = parseInt(text);
                    if (!isNaN(num)) {
                        animateValue(stat, 0, num, 2000);
                        setTimeout(() => {
                            stat.textContent += '+';
                        }, 2000);
                    }
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===== MOBILE MENU TOGGLE =====
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: var(--gold);
        font-size: 1.5rem;
        cursor: pointer;
    `;
    
    document.querySelector('.navbar .container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Show toggle on mobile
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        nav.style.display = 'none';
        nav.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--dark-gray);
            flex-direction: column;
            padding: 20px;
            border-bottom: 2px solid var(--gold);
        `;
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
            nav.style.display = 'flex';
            nav.style.cssText = '';
        }
    });
};

createMobileMenu();

// ===== PRICING CALCULATOR (Simple ROI) =====
const calculateSavings = () => {
    // This could be expanded into a full calculator modal
    const monthlyRevenue = prompt('What\'s your average monthly revenue? (e.g., 50000)');
    if (monthlyRevenue) {
        const revenue = parseInt(monthlyRevenue);
        const gcashFee = revenue * 0.025; // 2.5% average
        const pin8Fee = revenue * 0.00369; // 0.369%
        const savings = gcashFee - pin8Fee;
        const yearlySavings = savings * 12;
        
        alert(`
💰 SAVINGS CALCULATOR

On ₱${revenue.toLocaleString()}/month:

GCash/PayMaya (2.5%): ₱${Math.round(gcashFee).toLocaleString()}
PIN8 PULSE (0.369%): ₱${Math.round(pin8Fee).toLocaleString()}

You save: ₱${Math.round(savings).toLocaleString}/month
That's ₱${Math.round(yearlySavings).toLocaleString}/year!

Ready to switch? Fill out the form below. 👇
        `);
    }
};

// Add calculator button to hero section (optional)
// You can add a button that calls calculateSavings()

// ===== CONSOLE EASTER EGG =====
console.log('%c🏛️ PIN8 PRIME SPINE SYSTEM', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%cPlatforms are tools. You are the creator.', 'color: #ccc; font-size: 14px;');
console.log('%cBuilt with sovereignty in mind. Cebu City, Philippines.', 'color: #888; font-size: 12px;');

// ===== LAZY LOADING IMAGES =====
// If you add images later, enable this:
/*
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
*/

// ===== FORM VALIDATION ENHANCEMENT =====
const formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = 'rgba(212, 175, 55, 0.3)';
        }
    });
});

// ===== SCROLL TO TOP BUTTON =====
const createScrollToTop = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'scroll-to-top';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gold);
        color: var(--black);
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollToTop();

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('✅ PIN8 Landing Page Loaded Successfully');
console.log('📧 Ready to receive inquiries at inquiry.pin8@gmail.com');
