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

// Toggle Mode Function
function myFunction() {
  const body = document.body;
  body.classList.toggle("warm-mode");
  
  // Update elements that need direct style changes
  const profileImg = document.querySelector('.img-profile');
  const navLinks = document.querySelectorAll('#sideNav .nav-link');
  
  // Toggle profile border color
  const borderColor = body.classList.contains("warm-mode") ? '#213555' : '#fff';
  profileImg.style.borderColor = borderColor;

  // Force nav link color refresh
  navLinks.forEach(link => {
    link.style.color = ''; // Reset inline styles to let CSS handle it
  });

  // Save state
  localStorage.setItem("warmMode", body.classList.contains("warm-mode"));
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  const isWarmMode = localStorage.getItem("warmMode") === "true";
  const body = document.body;
  const navLinks = document.querySelectorAll('#sideNav .nav-link');
  
  // Set initial mode
  body.classList.toggle("warm-mode", isWarmMode);
  document.getElementById("darkModeToggle").checked = isWarmMode;

  // Initialize profile border
  const profileImg = document.querySelector('.img-profile');
  profileImg.style.borderColor = isWarmMode ? '#213555' : '#fff';

  // Initialize nav colors
  navLinks.forEach(link => {
    link.style.color = ''; // Ensure CSS controls the color
  });
});

 // Slideshow functionality
 /*var myIndex = 0;
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
 } */

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

 //cursor logic
