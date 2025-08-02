console.log("BlackRose script loaded!");
// Contact form submission logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      // Simulate form submission
      responseMsg.classList.remove("hidden");
      form.reset(); // clear form
    });
  }
});
// Countdown Timer for Event (Aug 15, 2025)
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
// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real form submission

    // Optionally, you can reset the form
    form.reset();

    // Show thank-you message
    response.classList.remove("hidden");
    response.textContent = "Thank you! We will get back to you shortly.";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the page from reloading
    responseMessage.classList.remove("hidden"); // Show the thank you message
  });
});
