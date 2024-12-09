// --- Manejo del Menú ---
export const manejarMenu = () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const header = document.querySelector(".header");

  if (menuToggle && header) {
    menuToggle.addEventListener("click", () => {
      header.classList.toggle("is-open");
    });
  } else {
    console.info(
      "No se encontraron los elementos del menú (menuToggle, header)."
    );
  }
};
