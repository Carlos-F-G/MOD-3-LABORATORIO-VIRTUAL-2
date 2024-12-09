// Función curried para calcular el costo total de los servicios
const calcularCostoTotal = (precioPorConsulta) => (numeroDeConsultas) =>
  precioPorConsulta * numeroDeConsultas;

// Exportar la función
export { calcularCostoTotal };
