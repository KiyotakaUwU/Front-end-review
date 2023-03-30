const menu = document.getElementById("menu-btn");
const responsive = document.getElementById("nav-bar");

menu.addEventListener("click", function () {
  responsive.className == "nav-bar"
    ? responsive.classList.add("active")
    : responsive.classList.remove("active");
});

const container = document.querySelector(".slider")
const left = document.getElementById("left-btn")
const right = document.getElementById("right-btn")

left.addEventListener("mouseenter", function () {
  container.scrollLeft -= container.offsetWidth
})
right.addEventListener("mouseenter", function () {
  container.scrollLeft += container.offsetWidth
})