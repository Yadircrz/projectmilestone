document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Assuming Node.js is handling the form submission
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('formMessage').innerText = 'Thank you for your message!';
                document.getElementById('contactForm').reset();
            } else {
                document.getElementById('formMessage').innerText = 'Error sending message. Please try again.';
            }
        })
        .catch(error => {
            document.getElementById('formMessage').innerText = 'Error sending message. Please try again.';
        });
    } else {
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});
