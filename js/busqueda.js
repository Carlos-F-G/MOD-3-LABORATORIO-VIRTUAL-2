// --- Búsqueda de Servicios ---
export const manejarBusqueda = () => {
  const inputBusqueda = document.getElementById("busqueda");
  const listaServicios = document.getElementById("lista-servicios");

  if (inputBusqueda && listaServicios) {
    const servicios = [
      { nombre: "Consulta General", descripcion: "Atención médica básica." },
      { nombre: "Cardiología", descripcion: "Cuidado del corazón." },
    ];

    const renderizarServicios = (filtro = "") => {
      listaServicios.innerHTML = ""; // Limpiar lista
      const serviciosFiltrados = servicios.filter((servicio) =>
        servicio.nombre.toLowerCase().includes(filtro.toLowerCase())
      );

      if (serviciosFiltrados.length === 0) {
        listaServicios.innerHTML = "<p>No se encontraron servicios.</p>";
      } else {
        serviciosFiltrados.forEach((servicio) => {
          const servicioElemento = document.createElement("div");
          servicioElemento.classList.add("servicio-item");
          servicioElemento.innerHTML = `
            <h3>${servicio.nombre}</h3>
            <p>${servicio.descripcion}</p>
          `;
          listaServicios.appendChild(servicioElemento);
        });
      }
    };

    inputBusqueda.addEventListener("input", (e) => {
      renderizarServicios(e.target.value);
    });

    renderizarServicios();
  } else {
    console.info(
      "No se encontraron los elementos para la búsqueda de servicios."
    );
  }
};
