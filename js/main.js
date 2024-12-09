
import { manejarMenu } from "./menu.js";
import { manejarModal } from "./modal.js";
import { manejarBusqueda } from "./busqueda.js";
import { manejarFormulario } from "./formulario.js";


document.addEventListener("DOMContentLoaded", () => {
  manejarMenu();
  manejarModal();
  manejarBusqueda();
  manejarFormulario();
});
