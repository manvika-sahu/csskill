// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form submission success
    alert('Thank you for contacting us! We will get back to you soon.');
});

// Sign-up form submission
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form submission success
    alert('Thank you for signing up! We will keep you updated.');
});

// This part is for any additional features you may want to implement, like dynamically loading content, etc.
// Track external link clicks
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function () {
        const url = link.href;

        // Push event to the dataLayer
        window.dataLayer.push({
            event: 'externalLinkClick', // Custom event name
            linkUrl: url               // URL of the clicked link
        });

        console.log('Tracked external link:', url); // For debugging
    });
});
