//for navbar
const navigationHeight = document.querySelector('.navbar').offsetHeight;
        document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");

//code for service-worker to clear browser cache
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
}

//for form data submission to database
$(document).ready(function() {
        $('#contactForm').on('submit', function(event) {
            event.preventDefault();
            const name = $('#name').val();
            const email = $('#email').val();
            const message = $('#message').val();

            $.ajax({
                url: '/submit',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ name: name, email: email, message: message }),
                success: function(response) {
                    $('#result').text('Form submitted successfully!');
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                    $('#result').text('Form submission failed.');
                }
            });
        });
    });
