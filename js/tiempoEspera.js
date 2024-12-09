const calcularPromedioEspera = (tiempos) =>
  tiempos.reduce((acc, curr) => acc + curr, 0) / tiempos.length;


export { calcularPromedioEspera };
