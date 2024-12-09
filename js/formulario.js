// --- Manejo del Formulario de Contacto ---
export const manejarFormulario = () => {
  const form = document.querySelector("#contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Formulario enviado con éxito.");
      form.reset();
    });
  } else {
    console.info("No se encontró el formulario con el ID 'contactForm'.");
  }
};
