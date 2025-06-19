document.addEventListener("DOMContentLoaded", () => {
  // Quote logic
  const quotes = [
    "Small steps every day lead to big results.",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you.",
    "Progress over perfection.",
    "Discipline is choosing between what you want now and what you want most."
  ];

  const quoteElement = document.getElementById("daily-quote");
  const storedQuote = localStorage.getItem("dailyQuote");
  const today = new Date().toLocaleDateString();
  const storedDate = localStorage.getItem("quoteDate");

  if (storedQuote && storedDate === today) {
    quoteElement.textContent = storedQuote;
  } else {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = quote;
    localStorage.setItem("dailyQuote", quote);
    localStorage.setItem("quoteDate", today);
  }

  // Burger menu toggle
  const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuButton.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

  // Optional: close menu after clicking a link
  document.querySelectorAll("nav.nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // Get Started Button
  document.getElementById("get-started").addEventListener("click", () => {
    alert("Welcome to GreenPath Fitness! Let’s start your journey.");
  });
});
