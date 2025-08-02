console.log("BlackRose script working");

// Show today's date in footer
document.addEventListener("DOMContentLoaded", function () {
  const dateNote = document.getElementById("dateNote");
  if (dateNote) {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    dateNote.textContent = formatted;
    dateNote.style.textAlign = "center";
  }
});

// Contact form submission logic (inquiries.html)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form && response) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.reset();
      response.classList.remove("hidden");
      response.textContent = "Thank you! We will get back to you shortly.";
    });
  }
});

// Countdown Timer (events.html)
function startCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const eventDate = new Date("August 15, 2025 00:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(timer);
      countdown.textContent = "Event Started!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
startCountdown();

// Trustees photo click (trustees.html)
document.addEventListener("DOMContentLoaded", function () {
  const trustees = document.querySelectorAll(".trustee img");
  trustees.forEach((img) => {
    img.addEventListener("click", () => {
      alert("You clicked on a trustee!");
    });
  });
});

// DOM Structure log (dom-structure.html)
console.log("DOM loaded:", document.body.children);

// Display current date on DOM Structure page
const dateElement = document.getElementById("currentDate");
if (dateElement) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateElement.textContent = formattedDate;
}

// Background color change
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
