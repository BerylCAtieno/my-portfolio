const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('#nav-links a');

navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll('.project-container');
  
  containers.forEach((container, index) => {
    // If index is odd, add the reverse class
    if (index % 2 !== 0) {
      container.classList.add('reverse');
    }
  });
});

// contact functionality

document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
      const response = await fetch("https://your-backend-url.com/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
          alert("Your message has been sent successfully!");
      } else {
          alert("There was an issue sending your message. Please try again.");
      }
  } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
  }
});
