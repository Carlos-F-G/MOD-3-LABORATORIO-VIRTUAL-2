// Función flecha para calcular el promedio de espera
const calcularPromedioEspera = (tiempos) =>
  tiempos.reduce((acc, curr) => acc + curr, 0) / tiempos.length;

// Exportar la función
export { calcularPromedioEspera };
