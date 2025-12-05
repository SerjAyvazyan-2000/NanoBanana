function initSwiper(selector, paginationSelector) {
  return new Swiper(selector, {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    autoHeight: true,
    slideToClickedSlide: true,

    pagination: {
      el: paginationSelector,
      clickable: true,
    },

    observer: true,
    observeParents: true,

    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      1200: { slidesPerView: "auto" },
    },
  });
}

initSwiper(".detailsSwiper", ".details-pagination");
initSwiper(".styleSwiper", ".style-pagination");
initSwiper(".wordsSwiper", ".words-pagination");


function initWordsSplide() {

const splide = new Splide(".wordsSplide", {
  type: "loop",
  gap: "30px",
  speed: 600,
  pagination: true,
  arrows: false,
  autoHeight: true,

  autoWidth: true,
  focus: "center",

  breakpoints: {
    1200: {
      autoWidth: false,
      perPage: 1,
      focus: "center",
      gap: "16px",
    },
   
  },
});

splide.mount();

setTimeout(() => {
  window.dispatchEvent(new Event("resize"));
}, 50);

document.querySelector(".wordsSplide").addEventListener("click", (e) => {
  const slide = e.target.closest(".splide__slide");
  if (!slide) return;

  const index = [...slide.parentElement.children].indexOf(slide);

  splide.go(index);
});
}
window.addEventListener("load", initWordsSplide);
