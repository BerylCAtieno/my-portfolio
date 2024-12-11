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

