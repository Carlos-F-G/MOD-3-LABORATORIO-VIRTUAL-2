// --- Modal: Reservar Cita ---
export const manejarModal = () => {
  const btnReservarCita = document.getElementById("btnReservarCita");
  const modal = document.getElementById("modalReservarCita");
  const closeModal = document.getElementById("closeModal");

  if (btnReservarCita && modal && closeModal) {
    btnReservarCita.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    modal.style.display = "none";
  } else {
    console.info(
      "No se encontraron los elementos del modal (btnReservarCita, modalReservarCita, closeModal)."
    );
  }
};
