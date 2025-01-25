(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict



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
