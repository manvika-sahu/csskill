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
// Fire `view_promotion` event when the page loads (when the banner is visible)
document.addEventListener('DOMContentLoaded', function() {
    // Select the promotional banner element (You can customize the ID/class based on your HTML)
    var promoBanner = document.getElementById('promo-banner'); // Assuming you have an element with ID 'promo-banner'

    // Ensure the banner element exists before attaching the event
    if (promoBanner) {
        // Push `view_promotion` when the page loads and the banner is visible
        window.dataLayer.push({
            event: "view_promotion",
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
                        price: 10.01,
                        quantity: 3
                    }
                ]
            }
        });

        console.log("Promotion Banner View event pushed to the dataLayer");

        // Add click event listener for select_promotion
        promoBanner.addEventListener('click', function() {
            // Push `select_promotion` when the banner is clicked
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

// Login Authentication Function
function authenticate(event) {
    event.preventDefault(); // Prevent the form from submitting

    var authorised;
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check to see if the password and username match
    if (username == "abcd" && password == "pass12345") {
        authorised = true;
        alert("Login successful");
        window.location.href = "login-successful.html"; // Redirect to login-successful.html
        dataLayer.push({
            'event': 'login_success',
            'user_id': 'pas123'
        });
    }
    // Additional conditions for other usernames/passwords
    else if (username == "shivayush" && password == "shiv123") {
        authorised = true;
        alert("Login successful");
        window.location.href = "login-successful.html"; // Redirect to login-successful.html
        dataLayer.push({
            'event': 'login_success',
            'user_id': 'shiv123'
        });
    }
    else if (username == "paridhi" && password == "pari") {
        authorised = true;
        alert("Login successful");
        window.location.href = "login-successful.html"; // Redirect to login-successful.html
        dataLayer.push({
            'event': 'login_success',
            'user_id': 'pari123'
        });
    }
    else if (username == "yasir" && password == "yas123") {
        authorised = true;
        alert("Login successful");
        window.location.href = "login-successful.html"; // Redirect to login-successful.html
        dataLayer.push({
            'event': 'login_success',
            'user_id': 'yas123'
        });
    }
    else if (username == "ishika" && password == "ishi123") {
        authorised = true;
        alert("Login successful");
        window.location.href = "login-successful.html"; // Redirect to login-successful.html
        dataLayer.push({
            'event': 'login_success',
            'user_id': 'ishi123'
        });
    }
    else {
        authorised = false;
        // If the username or password is incorrect
        alert("Sorry, password is incorrect.");
        window.location.href = "login-failed.html"; // Redirect to login-failed.html
        dataLayer.push({
            'event': 'login_failed'
        });
    }

    // Return result
    return authorised;
}

// Add event listener for form submission
document.getElementById("login-form").addEventListener("submit", authenticate);
