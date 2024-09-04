let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
let cursorColor = document.querySelectorAll(".cursor-color");

// cursor js 

body.addEventListener("mousemove", function (location) {
    cursor.style.left = location.x + "px";
    cursor.style.top = location.y + "px";
  });
  
  cursorColor.forEach((link) => {
    link.addEventListener("mousemove", () => {
      cursor.classList.add("color");
    });
  
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("color");
    });
  });