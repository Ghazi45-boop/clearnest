document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            
            // Simple animation for hamburger lines
            const spans = mobileMenuBtn.querySelectorAll('span');
            if(mobileNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
            }
        });

        // Close menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
            });
        });
    }

    // 2. FORM VALIDATION & WHATSAPP GENERATION
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        // ⚠️ CONFIGURATION: Change this to your actual WhatsApp number later
        const WHATSAPP_NUMBER = "2348000000000"; 

        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop normal form submission

            // Get values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const details = document.getElementById('details').value.trim();

            // Basic Validation
            if (!name || !phone || !service) {
                alert("Please fill in your name, phone number, and select a service.");
                return;
            }

            // Construct the message using URL encoding for spaces (%0A is a new line)
            const message = `*New ClearNest Quote Request*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*Phone:* ${phone}%0A` +
                            `*Service:* ${service}%0A` +
                            `*Details:* ${details ? details : 'None provided'}`;

            // Create the WhatsApp URL
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            // Open WhatsApp in a new tab
            window.open(waUrl, '_blank');
            
            // Reset form after sending
            quoteForm.reset();
        });
    }
});