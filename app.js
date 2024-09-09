/*hamburger menu */
const menu_icon = document.getElementById("hamburger");
const menu_links = document.getElementById("navlinks");

menu_icon.addEventListener("click", function () {
  menu_links.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu_icon.contains(e.target)) {
    menu_links.classList.remove("active");
  }
});
