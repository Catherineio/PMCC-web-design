var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav_menu a[href*=" + sectionId + "]");
      // .classList.add("active-link");
    } else {
      document.querySelector(".nav_menu a[href*=" + sectionId + "]");
      // .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.caster_img `, { delay: 400, origin: "top" });
sr.reveal(`.caster_info `, { delay: 400 });

sr.reveal(`.training_content, .host_content`, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.character, .host_img`, { origin: "right" });

sr.reveal(`.prize img, .info_1`, {
  origin: "top",
  interval: 140,
});

// sr.reveal(
//   `.footer_content, .footer_link, .footer_form, .footer_social, .footer-bottom`,
//   {
//     delay: 700,
//     origin: "top",
//   }
// );
