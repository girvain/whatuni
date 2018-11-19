/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 


$("#bar-button").click(function (e) { 
  $("#nav-items").slideToggle(200);
});

function test() {
  alert("ho");
}