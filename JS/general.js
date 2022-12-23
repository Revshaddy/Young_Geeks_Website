let menu = document.getElementById("main-menu");
let preloader = document.querySelector(".preloader");
let copyrightText = document.querySelector(".copyright-text");

//Event Listeners
window.addEventListener("scroll", () => {
  if (scrollY >= 105) {
    menu.classList.add("main-menu-scroll");
  } else {
    menu.classList.remove("main-menu-scroll");
  }
});

window.addEventListener("load", () => {
  preloader.style.display = "none";
  copyrightRender();
});

window.addEventListener("resize", () => {
  copyrightRender();
});

//Functions
function homeBtn() {
  window.location.href = "./index.html";
}

function aboutusBtn() {
  window.location.href = "./about-us.html";
}

function ouractivitiesBtn() {
  window.location.href = "./our-activities.html";
}

function blogBtn() {
  window.location.href = "./blog.html";
}

function galleryBtn() {
  window.location.href = "./gallery.html";
}

function contactBtn() {
  window.location.href = "./contact.html";
}

copyrightText.textContent =
  "© Copyright 2022 Young Geeks Technology. All Rights Reserved";
function copyrightRender() {
  let width = window.innerWidth;
  const copyrightRender = "© Copyright 2022";
  if (width < 800) {
    copyrightText.textContent = copyrightRender;
  } else {
    copyrightText.textContent =
      "© Copyright 2022 Young Geeks Technology. All Rights Reserved";
  }
}
