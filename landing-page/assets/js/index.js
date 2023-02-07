// NAVBAR

const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar")

function handleMenuClick(){
  if (navbar.style.transform == "translateX(0%)"){
    navbar.style.transform = "translateX(100%)"
  } else {
    navbar.style.transform = "translateX(0%)";
    console.log(navbar.style.transform)
  }; 
}

menuButton.addEventListener("click", () => {
  handleMenuClick();
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768){
    navbar.style.transform = "translateX(0%)"
  }
})
