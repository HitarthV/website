// JavaScript code (if needed) for the news section
// Add any JavaScript logic or functionality related to the news section here

// Example: Displaying an alert when a news item is clicked
document.addEventListener("DOMContentLoaded", function() {
  var newsItems = document.querySelectorAll(".news-list li");

  for (var i = 0; i < newsItems.length; i++) {
    newsItems[i].addEventListener("click", function() {
      var newsTitle = this.querySelector("h3").textContent;
      alert("You clicked on the news: " + newsTitle);
    });
  }
});
