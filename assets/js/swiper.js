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
  const container = document.querySelector(".wordsSplide");
  if (!container) return;

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
        gap: "16px",
      },
    },
  });

  splide.mount();

  // 1) ЖДЁМ загрузку всех картинок в этом слайдере
  const imgs = container.querySelectorAll("img");
  let loaded = 0;

  imgs.forEach((img) => {
    if (img.complete) {
      loaded++;
    } else {
      img.addEventListener("load", () => {
        loaded++;
        if (loaded === imgs.length) fixSplide(splide);
      });
      img.addEventListener("error", () => {
        loaded++;
        if (loaded === imgs.length) fixSplide(splide);
      });
    }
  });

  // Если НЕ было картинок или все уже загружены
  if (imgs.length === 0 || loaded === imgs.length) {
    fixSplide(splide);
  }

  // Клик по боковым
  container.addEventListener("click", (e) => {
    const slide = e.target.closest(".splide__slide");
    if (!slide) return;
    const index = [...slide.parentElement.children].indexOf(slide);
    splide.go(index);
  });
}

// 2) Двойное восстановление карусели
function fixSplide(splide) {
  setTimeout(() => {
    splide.refresh();
    window.dispatchEvent(new Event("resize"));
  }, 50);

  setTimeout(() => {
    splide.refresh();
    window.dispatchEvent(new Event("resize"));
  }, 200);
}

window.addEventListener("load", initWordsSplide);