/* js/main.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // Interaction for the Restaurant Case Study Form
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload
            
            // Capture form data
            const name = document.getElementById("name").value;
            const type = document.getElementById("type").value;
            const message = document.getElementById("message").value;
            
            // Define the restaurant email (hypothetical)
            const emailTo = "bookings@thelocalbistro.com";
            
            // Format the subject and body for the email client
            const subject = encodeURIComponent(`New ${type} from ${name}`);
            const body = encodeURIComponent(`Customer Name: ${name}\nRequest Type: ${type}\n\nDetails:\n${message}`);
            
            // Open the user's email client
            window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
        });
    }
});