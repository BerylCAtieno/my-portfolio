const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('#nav-links a');

navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add('active');
  }
});
