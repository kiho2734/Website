// Click menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-bar").classList.toggle("open");
});

document.querySelector(".nav-list").addEventListener("click", function () {
  document.querySelector(".nav-bar").classList.remove("open");
});
