// Importaciones correctas desde la misma carpeta
import { manejarMenu } from "./menu.js";
import { manejarModal } from "./modal.js";
import { manejarBusqueda } from "./busqueda.js";
import { manejarFormulario } from "./formulario.js";

// Ejecutar las funcionalidades
document.addEventListener("DOMContentLoaded", () => {
  manejarMenu();
  manejarModal();
  manejarBusqueda();
  manejarFormulario();
});
