 
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "sgs-bar" + " sgs-card" + " sgs-animate-top" + " sgs-white";
      } else {
          navbar.className = navbar.className.replace(" sgs-card sgs-animate-top sgs-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("sgs-show") == -1) {
          x.className += " sgs-show";
      } else {
          x.className = x.className.replace(" sgs-show", "");
      }
  }



  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }