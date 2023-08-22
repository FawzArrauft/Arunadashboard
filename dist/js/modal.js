//Modal
document.addEventListener("DOMContentLoaded", function () {
    const showModalButtons =
      document.querySelectorAll("[data-te-show]");

    showModalButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetModalId = button.getAttribute("data-te-target");
        const targetModal = document.getElementById(targetModalId);

        if (targetModal) {
          targetModal.classList.remove("hidden");
        }
      });
    });

    const hideModalButtons =
      document.querySelectorAll("[data-modal-hide]");

    hideModalButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetModalId = button.getAttribute("data-modal-hide");
        const targetModal = document.getElementById(targetModalId);

        if (targetModal) {
          targetModal.classList.add("hidden");
        }
      });
    });

    // Close modal when clicking outside
    const modalOverlays = document.querySelectorAll(".modal-overlay");

    modalOverlays.forEach((overlay) => {
      overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
          overlay.classList.add("hidden");
        }
      });
    });
  });