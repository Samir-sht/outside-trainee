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

/*video*/

const videoPlayers = document.querySelectorAll(".videoplayer");

videoPlayers.forEach((video) => {
  video.controls = false;

  video.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
