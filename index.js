const header = document.querySelector(".main-header .container");
const nav = document.querySelector(".nav");
console.log(header);
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("display");
  header.classList.toggle("display");
});
