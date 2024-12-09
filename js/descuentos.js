import { calcularCostoTotal } from "./calculadoraServicios.js";

// Función para aplicar un descuento
const aplicarDescuento = (costo) => costo * 0.9;

// Composición de funciones
const calcularCostoFinal = (numeroDeConsultas, precioPorConsulta) =>
  aplicarDescuento(calcularCostoTotal(precioPorConsulta)(numeroDeConsultas));

// Exportar
export { calcularCostoFinal };
