// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

// Dynamic footer content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
