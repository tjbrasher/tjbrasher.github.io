function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

;(function ($) {
  'use strict';
  var content  = $('#main').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
          
          // Set the duration of our animation
          duration: 250,
          
          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);

;(function ($) {
  'use strict';
  var $body    = $('html, body'), // Define jQuery collection 
      content  = $('#main').smoothState({
        onStart : {
          duration: 250,
          render: function () {
            content.toggleAnimationClass('is-exiting');
            
            // Scroll user to the top
            $body.animate({ 'scrollTop': 0 });

          }
        }
      }).data('smoothState');
})(jQuery);
