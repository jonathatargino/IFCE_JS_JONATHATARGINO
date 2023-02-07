// NAVBAR
const navbar = document.querySelector(".navbar")
const menuButton = document.querySelector(".menu-button");
const menuIcon = document.querySelector(".menu-svg")
const closeMenuIcon = document.querySelector(".close-menu-svg")


function handleMenuClick(){
  navbar.classList.toggle('navbar-closed');
  menuIcon.classList.toggle("invisible-icon");
  closeMenuIcon.classList.toggle("invisible-icon");
}

menuButton.addEventListener("click", () => {
  handleMenuClick();
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navbar.classList.contains('navbar-closed')){
    navbar.classList.add('navbar-closed');
  }
})
