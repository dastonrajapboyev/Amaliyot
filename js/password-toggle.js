//  ------------------ password toggle
document.addEventListener("DOMContentLoaded", function () {
  const togglePasswordButton = document.querySelector(".toggle-password");
  const passwordInput = document.querySelector("#password");

  togglePasswordButton.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });
});

// slider image
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const dotsContainer = document.getElementById("dots-container");
let slideInterval;

// Create dots based on the number of images
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.setAttribute("onclick", `currentSlide(${index + 1})`);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active-slide"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("active");

  slideInterval = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
  clearTimeout(slideInterval); // Clear the current timeout
  slideIndex = n - 1; // Set the slide index
  showSlides(); // Show the slides
}

function handleResize() {
  clearTimeout(slideInterval); // Clear the current timeout

  if (window.innerWidth <= 768) {
    slides.forEach((slide) => slide.classList.remove("active-slide"));
    dots.forEach((dot) => dot.classList.remove("active"));
  } else {
    showSlides();
  }
}

window.addEventListener("resize", handleResize);

// Initialize the slider
handleResize();
