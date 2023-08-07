// Add smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a[href^='#']");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  const headerHeight = document.querySelector("header").clientHeight;
  const offsetPosition = targetElement.getBoundingClientRect().top - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth"
  });
}

const serviceBoxes = document.querySelectorAll(".services_box");

serviceBoxes.forEach((serviceBox) => {
  const image = serviceBox.querySelector(".services_img img");

  serviceBox.addEventListener("mouseenter", () => {
    image.style.opacity = "1";
  });

  serviceBox.addEventListener("mouseleave", () => {
    image.style.opacity = "0.5"; // Adjust the opacity value as needed
  });
});