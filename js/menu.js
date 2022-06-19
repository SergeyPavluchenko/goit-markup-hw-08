(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-modal-open-btn]"),
    closeMenuBtn: document.querySelector("[data-modal-close-btn]"),
    menu: document.querySelector("[data-modal-btn]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

