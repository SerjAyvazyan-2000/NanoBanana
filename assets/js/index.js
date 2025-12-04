
  const items = document.querySelectorAll(".a-accordion-item");

items.forEach(item => {
  const header = item.querySelector(".a-accordion-header");

  header.addEventListener("click", () => {
    // Если нажали на открытую — просто закрыть её
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }

    // Закрыть все остальные
    items.forEach(i => i.classList.remove("active"));

    // Открыть текущую
    item.classList.add("active");
  });
});

// Изначально открыт первый
items[0].classList.add("active");



  