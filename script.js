let menuBtn = document.querySelector("header nav .toggle-menu");
let menu = document.querySelector(".sideMenu");
let overlay = document.createElement("div");
let menuCloseBtn = document.querySelector(".sideMenu .close");
let menuLink = document.querySelector(".sideMenu .links li");
menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.right = "0";
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
});

window.addEventListener("click", (e) => {
  if (e.target == overlay) {
    menu.style.display = "none";
    menu.style.right = "-100%";
    overlay.classList.remove("overlay");
  }
});
menuCloseBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menu.style.right = "-100%";
  overlay.classList.remove("overlay");
});
