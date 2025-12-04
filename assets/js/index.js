const items = document.querySelectorAll(".a-accordion-item");

items.forEach((item) => {
  const header = item.querySelector(".a-accordion-header");

  header.addEventListener("click", () => {
    // Если нажали на открытую — просто закрыть её
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }

    // Закрыть все остальные
    items.forEach((i) => i.classList.remove("active"));

    // Открыть текущую
    item.classList.add("active");
  });
});

items[0].classList.add("active");

$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };

  let accordion = new Accordion($("#accordion"), false);

  let firstLink = $("#accordion .link").first();
  let firstSub = firstLink.next(".submenu");

  firstLink.addClass("open");
  firstSub.show();
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});
