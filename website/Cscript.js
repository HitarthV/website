document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }

    // Perform form submission (replace with your own logic)
    // You can use AJAX or submit the form data to a server-side script
    // For this example, we will just log the form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Reset the form fields after successful submission
    form.reset();
  });
});
