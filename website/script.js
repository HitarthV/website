// Add an active class to the current link when clicked
var navLinks = document.getElementsByClassName("sidenav")[0].getElementsByTagName("a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}