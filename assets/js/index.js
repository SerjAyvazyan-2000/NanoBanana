

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



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade-left
  gsap.utils.toArray(".fade-left").forEach((el) => {
    gsap.fromTo(
      el,
      { x: -40, opacity: 0, visibility: "visible" },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });

  // Fade-right
  gsap.utils.toArray(".fade-right").forEach((el) => {
    gsap.fromTo(
      el,
      { x: 40, opacity: 0, visibility: "visible" },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });

  // Fade-top
  gsap.utils.toArray(".fade-top").forEach((el) => {
    gsap.fromTo(
      el,
      { y: -40, opacity: 0, visibility: "visible" },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });

  // Fade-bottom
  gsap.utils.toArray(".fade-bottom").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0, visibility: "visible" },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });
});

