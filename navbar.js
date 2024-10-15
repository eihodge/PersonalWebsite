const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('website-links')[0]

toggleButton.addEventListener('click', (event) => {
  event.preventDefault();
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('open');
})