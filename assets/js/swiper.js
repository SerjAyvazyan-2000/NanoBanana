function initSwiper(selector, paginationSelector) {
  return new Swiper(selector, {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    speed: 600,

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