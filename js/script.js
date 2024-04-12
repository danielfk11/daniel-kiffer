function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.about-containers, .details-container');
  
  function checkVisible(elm) {
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  function loadVisible() {
    elements.forEach((el) => {
      if (checkVisible(el)) {
        el.classList.add("visible");
      }
    });
  }

  // Adiciona a classe 'visible' aos elementos visíveis ao carregar a página
  loadVisible();

  // Adiciona a classe 'visible' aos elementos visíveis durante o scroll
  window.addEventListener('scroll', loadVisible);
});
