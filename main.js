const buttonMenu = document.getElementById("menu--btn");

const eventTarget = ["click", "dbclick"];
eventTarget.forEach((event) => buttonMenu.addEventListener(event, openMenu));

function openMenu(ev) {
  console.log(ev);
  const menuOpen = this.querySelector(".menu");
  console.log(menuOpen);
  document.body.classList.toggle("class--menu")
}
