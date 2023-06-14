// Get all the "Read More" links
let links = document.querySelectorAll(".read-more-link");
// Add event listener to each "Read More" link
links.forEach(link => {
  link.onclick = function(){
    window.location.href = "travel-guides.html";
  }
  })
  function redirect() {
    window.location.href = "planTrip.html";
}
function signIn(){
  window.location.href = "signInPage.html"
}



// links.onclick = function(){
//   link1.style.backgroundColor = "red";
//   window.location.href = "travel-guides.html";
// }
