document.getElementById("downloadBtn").addEventListener("click", function() {
  alert("Download started!");
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});
