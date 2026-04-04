// PIN8 CONTENT CREATORS SYSTEM

// Toggle FAQ
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isHidden = answer.classList.contains('hidden');
    
    // Close all FAQs
    document.querySelectorAll('.faq-answer').forEach(faq => {
        faq.classList.add('hidden');
    });
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Open clicked if was closed
    if (isHidden) {
        answer.classList.remove('hidden');
        element.classList.add('active');
    }
}

// Submit Lead
function submitLead() {
    const name = document.getElementById('leadName').value.trim();
    const email = document.getElementById('leadEmail').value.trim();
    const phone = document.getElementById('leadPhone').value.trim();
    const platform = document.getElementById('leadPlatform').value.trim();
    const followers = document.getElementById('leadFollowers').value.trim();
    const painPoints = document.getElementById('leadPainPoints').value.trim();
    const goals = document.getElementById('leadGoals').value.trim();
    const challenges = document.getElementById('leadChallenges').value.trim();
    const inquiry = document.getElementById('leadInquiry').value.trim();

    if (!name || !email) { 
        alert('Name and Email are required'); 
        return; 
    }

    const leadData = {
        name, email, phone, platform, followers,
        painPoints, goals, challenges, inquiry,
        stage: 'creator_discovery_request',
        timestamp: new Date().toISOString()
    };

    saveLead(leadData);

    alert('✅ Thank you ' + name + '!\n\nYour discovery call request has been received.\n\nWe will reach out within 48 hours to schedule your alignment call.\n\nThis is a conversation, not a commitment.');

    // Clear form
    document.getElementById('leadName').value = '';
    document.getElementById('leadEmail').value = '';
    document.getElementById('leadPhone').value = '';
    document.getElementById('leadPlatform').value = '';
    document.getElementById('leadFollowers').value = '';
    document.getElementById('leadPainPoints').value = '';
    document.getElementById('leadGoals').value = '';
    document.getElementById('leadChallenges').value = '';
    document.getElementById('leadInquiry').value = '';
}

// Save Lead to LocalStorage
function saveLead(data) {
    const leads = JSON.parse(localStorage.getItem('pin8_creator_leads') || '[]');
    leads.push(data);
    localStorage.setItem('pin8_creator_leads', JSON.stringify(leads));
    console.log('💾 Creator Lead Saved:', data);
}

// Console Commands
console.log('%c📊 PIN8 CREATOR LEADS', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cType viewCreatorLeads() to see collected data', 'color: #888;');

function viewCreatorLeads() {
    const leads = JSON.parse(localStorage.getItem('pin8_creator_leads') || '[]');
    console.table(leads);
    return leads;
}
