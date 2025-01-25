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


// Dark mode toggle function
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark");

  // Toggle text color to white when dark mode is active
  if (element.classList.contains("dark")) {
    document.body.style.color = 'white';  // Change text color to white in dark mode
  } else {
    document.body.style.color = '';  // Revert to default text color
  }
}

// Slideshow functionality
let myIndex = 0;  // To track the slide index
function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Hide all slides first
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Increment the slide index, and loop back if necessary
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;  // Reset to the first image
  }    

  // Display the current slide
  slides[myIndex-1].style.display = "block";  

  // Set the timeout to call the carousel function every 2 seconds
  setTimeout(carousel, 2000); 
}

// Wait for the DOM to fully load before calling the carousel function
document.addEventListener("DOMContentLoaded", function() {
  carousel();  // Start the slideshow once the page is ready
});
