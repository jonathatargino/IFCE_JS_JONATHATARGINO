// NAVBAR

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar")

function handleMenuClick(){
  navbar.classList.toggle('navbar-closed')
}

menuButton.addEventListener("click", () => {
  handleMenuClick();
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navbar.classList.contains('navbar-closed')){
    navbar.classList.add('navbar-closed');
  }
})
