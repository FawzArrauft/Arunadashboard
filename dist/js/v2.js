//DARK MODE
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}
var themeToggleBtn = document.getElementById("toggle-theme");

themeToggleBtn.addEventListener("click", function () {

  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});



// sidebar

const sidebar = document.querySelector("aside");
const maxSidebar = document.querySelector(".max");
const miniSidebar = document.querySelector(".mini");
const roundout = document.querySelector(".roundout");
const maxToolbar = document.querySelector(".max-toolbar");
const logo = document.querySelector(".logo");
const content = document.querySelector(".content");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

function setDark(val) {
  if (val === "dark") {
    document.documentElement.classList.add("dark");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
  }
}

function openNav() {
  if (sidebar.classList.contains("-translate-x-48")) {
    // max sidebar
    sidebar.classList.remove("-translate-x-48");
    sidebar.classList.add("translate-x-none");
    maxSidebar.classList.remove("hidden");
    maxSidebar.classList.add("flex");
    miniSidebar.classList.remove("flex");
    miniSidebar.classList.add("hidden");
    maxToolbar.classList.add("translate-x-0");
    maxToolbar.classList.remove("translate-x-24", "scale-x-0");
    logo.classList.remove("ml-12");
    content.classList.remove("ml-12");
    content.classList.add("ml-12", "md:ml-60");
  } else {
    // mini sidebar
    sidebar.classList.add("-translate-x-48");
    sidebar.classList.remove("translate-x-none");
    maxSidebar.classList.add("hidden");
    maxSidebar.classList.remove("flex");
    miniSidebar.classList.add("flex");
    miniSidebar.classList.remove("hidden");
    maxToolbar.classList.add("translate-x-24", "scale-x-0");
    maxToolbar.classList.remove("translate-x-0");
    logo.classList.add("ml-12");
    content.classList.remove("ml-12", "md:ml-60");
    content.classList.add("ml-12");
  }
}
