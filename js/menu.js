(() => {
  const refs = {
    openMenuBtn: document.querySelector(".button-mob"),
    closeMenuBtn: document.querySelector(".mob-close-btn"),
    menu: document.querySelector(".mob-disp-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();