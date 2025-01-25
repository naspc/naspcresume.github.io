const scriptURL = 'https://script.google.com/macros/s/AKfycbz98Zf588UgbglU7GQDfO6IxzTYdNmnyG5FcerGuqVU3yJ8K_YMymbq6FZZ1FRCSagOeg/exec';
const form = document.forms['submit-to-google-sheet'];  // Ensure this matches your form's name
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the form from actually submitting
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    msg.innerHTML = "Message has been sent successfully!";
    setTimeout(function() {
      msg.innerHTML = "";
    }, 5000);
    form.reset();  // Reset the form
  })
  .catch(error => {
    console.error('Error!', error.message);
    msg.innerHTML = "Error! Unable to send message.";
  });
});
