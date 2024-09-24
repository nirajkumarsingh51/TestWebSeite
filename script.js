document.querySelector('.order-btn').addEventListener('click', function() {
    let address = document.querySelector('.address-input').value;
    if (address.length < 5) {
        alert('Please enter a valid address.');
    } else {
        alert('Order Placed Successfully for Address: ' + address);
    }
});

// Reviews slider logic
let reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? 'block' : 'none';
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

setInterval(nextReview, 3000); // Change reviews every 3 seconds

showReview(currentReview); // Initially show the first review


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page
    let name = document.querySelector('.contact-form input[type="text"]').value;
    let email = document.querySelector('.contact-form input[type="email"]').value;
    let message = document.querySelector('.contact-form textarea').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
