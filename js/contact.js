 // Form submission handler
 const scriptURL = 'https://script.google.com/macros/s/AKfycbz98Zf588UgbglU7GQDfO6IxzTYdNmnyG5FcerGuqVU3yJ8K_YMymbq6FZZ1FRCSagOeg/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById("msg")

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
       msg.innerHTML = "Message has been sent successfully"
       setTimeout(function() {
           msg.innerHTML = ""
       }, 5000)
       form.reset()
     })
     .catch(error => console.error('Error!', error.message))
 })

 function myFunction() {
  const body = document.body;
  body.classList.toggle("warm-mode");

  // Save the user's preference in localStorage
  const isWarmMode = body.classList.contains("warm-mode");
  localStorage.setItem("warmMode", isWarmMode);
}

// Check for saved preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const isWarmMode = localStorage.getItem("warmMode") === "true";
  const body = document.body;

  // Start in dark mode by default
  if (!isWarmMode) {
    body.classList.remove("warm-mode");
  } else {
    body.classList.add("warm-mode");
  }

  // Set the toggle state
  document.getElementById("darkModeToggle").checked = isWarmMode;
});
 // Slideshow functionality
 var myIndex = 0;
 carousel();

 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}    
   x[myIndex-1].style.display = "block";  
   setTimeout(carousel, 2000); // Change image every 2 seconds
 }

 // Changing text logic 

 const words = ["Developer", "Programmer", "Student", "Athlete", "Gamer", "Leader"];
 let i = 0;
 let j = 0;
 let isDeleting = false;
 const speed = 100; // Typing speed in milliseconds
 const deleteSpeed = 50; // Deleting speed in milliseconds
 const pause = 1000; // Pause between words in milliseconds

 function type() {
     const currentWord = words[i];
     const displayText = document.querySelector('.automatic');

     if (!isDeleting) {
         displayText.textContent = currentWord.substring(0, j + 1);
         j++;
         if (j === currentWord.length) {
             isDeleting = true;
             setTimeout(type, pause);
         } else {
             setTimeout(type, speed);
         }
     } else {
         displayText.textContent = currentWord.substring(0, j - 1);
         j--;
         if (j === 0) {
             isDeleting = false;
             i = (i + 1) % words.length;
             setTimeout(type, speed);
         } else {
             setTimeout(type, deleteSpeed);
         }
     }
 }

 document.addEventListener('DOMContentLoaded', type);