const scriptURL = 'https://script.google.com/macros/s/AKfycbz98Zf588UgbglU7GQDfO6IxzTYdNmnyG5FcerGuqVU3yJ8K_YMymbq6FZZ1FRCSagOeg/exec';
const form = document.forms['submit-to-google-sheet'];  // Ensure this matches your form's name
const msg = document.getElementById("msg");

function submitForm(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  msg.innerHTML = "Sending..."; // Show loading message while submitting

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    msg.innerHTML = "Message has been sent successfully!";
    setTimeout(function() {
      msg.innerHTML = "";
    }, 5000); // Clear the success message after 5 seconds
    form.reset(); // Reset the form after submission
  })
  .catch(error => {
    console.error('Error!', error.message);
    msg.innerHTML = "Error! Unable to send message."; // Show error message
  });
}
