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