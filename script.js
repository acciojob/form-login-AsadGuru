// Function to handle form submission
function getFormvalue(event) {
    // Ensure the event object is available
    if (event) {
        // Prevent the default form submission action
        event.preventDefault();
        
        // Get the form element
        const form = document.getElementById('form1');
        
        // Retrieve the values of the input fields
        const firstName = form.elements['fname'].value;
        const lastName = form.elements['lname'].value;
        
        // Display the values using alert
        alert(`${firstName} ${lastName}`);
    } else {
        console.error("Event object is undefined.");
    }
}

// Attach the getFormvalue function to the form's submit event
document.getElementById('form1').addEventListener('submit', getFormvalue);
