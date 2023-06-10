// Get all the "Read More" links
let links = document.querySelectorAll(".read-more-link");
// Add event listener to each "Read More" link
links.forEach(link => {
  link.onclick = function(){
    window.location.href = "travel-guides.html";
  }
  })


// links.onclick = function(){
//   link1.style.backgroundColor = "red";
//   window.location.href = "travel-guides.html";
// }
