// Dark/Light mode toggle functionality
document.getElementById('toggle').addEventListener('change', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
});

// Scroll behavoir
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});