(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open-window]"),
    closeModalBtn: document.querySelector("[modal-close-window]"),
    modal: document.querySelector("[modal-window]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();