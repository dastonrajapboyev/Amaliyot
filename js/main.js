const burgerMenu = document.querySelector(".burger-menu");
const flightInfo = document.querySelector(".flight-info");
const rightColumn = document.querySelector(".right-column");

burgerMenu.addEventListener("click", () => {
  flightInfo.classList.toggle("show");
  rightColumn.classList.toggle("show");
});
