let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
let cursorColor = document.querySelectorAll(".cursor-color");
let cursorColorWhite = document.querySelectorAll(".cursor-color-white");
let cursorColorNone = document.querySelectorAll(".cursor-color-none");



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

  cursorColorWhite.forEach((link) => {
    link.addEventListener("mousemove", () => {
      cursor.classList.add("white");
    });
  
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("white");
    });
  });

  cursorColorNone.forEach((link) => {
    link.addEventListener("mousemove", () => {
      cursor.classList.add("cursor-none");
    });
  
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-none");
    });
  });

<<<<<<< HEAD
=======
  //swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
>>>>>>> 91723dca8d84349b52fe28fadb0aac54b469ca37
