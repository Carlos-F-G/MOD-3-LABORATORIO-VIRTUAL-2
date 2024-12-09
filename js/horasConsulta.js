// Recursión para calcular el total de horas de consulta
const calcularHorasTotales = (horas, index = 0, total = 0) => {
  if (index >= horas.length) return total;
  return calcularHorasTotales(horas, index + 1, total + horas[index]);
};

// Exportar la función
export { calcularHorasTotales };
