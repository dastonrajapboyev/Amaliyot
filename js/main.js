const burgerMenu = document.querySelector(".burger-menu");
const flightInfo = document.querySelector(".flight-info");
const rightColumn = document.querySelector(".right-column");

burgerMenu.addEventListener("click", () => {
  flightInfo.classList.toggle("show");
  rightColumn.classList.toggle("show");
});

// add new card modal

let modal = document.getElementById("myModal");

let btn = document.querySelector(".add-plus");

let closeBtn = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
