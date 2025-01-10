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
// Promo Banner Click Event
document.addEventListener('DOMContentLoaded', function() {
    // Select the promotional banner element (You can customize the ID/class based on your HTML)
    var promoBanner = document.getElementById('promo-banner'); // Assuming you have an element with ID 'promo-banner'

    // Ensure the banner element exists before attaching the click event
    if (promoBanner) {
        promoBanner.addEventListener('click', function() {
            // Push dataLayer to indicate the view_promotion event has occurred
            window.dataLayer.push({
                event: "select_promotion",
                ecommerce: {
                    creative_name: "Summer Banner",
                    creative_slot: "featured_app_1",
                    promotion_id: "P_12345",
                    promotion_name: "Summer Sale",
                    items: [
                        {
                            item_id: "SKU_12345",
                            item_name: "Stan and Friends Tee",
                            affiliation: "Google Merchandise Store",
                            coupon: "SUMMER_FUN",
                            discount: 2.22,
                            index: 0,
                            item_brand: "Google",
                            item_category: "Apparel",
                            item_category2: "Adult",
                            item_category3: "Shirts",
                            item_category4: "Crew",
                            item_category5: "Short sleeve",
                            item_list_id: "related_products",
                            item_list_name: "Related Products",
                            item_variant: "green",
                            location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                            price: 10.01,
                            quantity: 3
                        }
                    ]
                }
            });

            console.log("Promotion Banner Click event pushed to the dataLayer");

            // Show alert to indicate the banner was clicked
            alert("You clicked the promotion banner! The event has been pushed to the dataLayer.");
        });
    } else {
        console.error('Promo Banner not found on the page');
    }
});
