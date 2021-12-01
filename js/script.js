const closer = document.querySelector("#closer");
const navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  closer.style.display = "block";
};

closer.onclick = () => {
  navbar.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  closer.style.display = "none";
};

const cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  closer.style.display = "block";
};

const loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  closer.style.display = "block";
};

const searchForm = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.toggle("active");
};

const slides = document.querySelectorAll(".home .slides-container .slide");

let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;

  slides[index].classList.add("active");
}
