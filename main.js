const menuOpenBtn = document.getElementById("menu__open-btn");
const menuCloseBtn = document.getElementById("menu__close-btn");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav__link");

document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetTab = link.getAttribute("data-tab");

      // Remove active class from all tabs and contents
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked tab and the corresponding content
      link.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
});

// Toggle menu visibility
menuOpenBtn.addEventListener("click", function () {
  // const expanded =
  //   menuOpenBtn.getAttribute("aria-expanded") === "true" || false;
  // menuOpenBtn.setAttribute("aria-expanded", !expanded);
  document.body.classList.add("no-scroll");
  menuCloseBtn.setAttribute("aria-expanded", true);
  menuOpenBtn.setAttribute("aria-expanded", true);
  nav.classList.toggle("open");
});

// Toggle menu visibility
menuCloseBtn.addEventListener("click", function () {
  // const expanded =
  //   menuCloseBtn.getAttribute("aria-expanded") === "true" || false;
  // menuCloseBtn.setAttribute("aria-expanded", !expanded);
  document.body.classList.remove("no-scroll");
  menuOpenBtn.setAttribute("aria-expanded", false);
  menuCloseBtn.setAttribute("aria-expanded", false);
  nav.classList.toggle("open");
});

// Function to close navigation when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    nav.classList.remove("open");
    menuCloseBtn.setAttribute("aria-expanded", false);
  });
});
