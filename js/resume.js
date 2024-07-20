(function($) {
  "use strict"; // Start of use strict

  // Existing Smooth Scrolling
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

  // Existing Menu Close Behavior
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Existing Scrollspy Activation
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Download Button Confirmation Dialog
  $('#downloadButton').click(function() {
    $('#confirmationDialog').fadeIn(); // Use fadeIn for smooth display
  });

  // Download Resume after Confirmation
  $('#confirmationYes').click(function() {
    $('#confirmationDialog').fadeOut(); // Use fadeOut for smooth hiding
    window.location.href = 'img/your_resume.pdf'; // Update with the correct path to your resume
  });

  // Hide Confirmation Dialog
  $('#confirmationNo').click(function() {
    $('#confirmationDialog').fadeOut(); // Use fadeOut for smooth hiding
  });

})(jQuery); // End of use strict
