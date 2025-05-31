const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;
