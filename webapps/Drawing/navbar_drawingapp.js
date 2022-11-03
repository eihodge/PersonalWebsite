const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('website-links')[0]
let toggled = false;

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggled = !toggled;
  
  if (toggled) {
    document.getElementById("nav").style.top = "92%";
  } else {
    document.getElementById("nav").style.top = "6.5%";
  }
})