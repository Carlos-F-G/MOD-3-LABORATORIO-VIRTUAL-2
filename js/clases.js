
class Doctor {
  constructor(nombre, especialidad, experiencia) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.experiencia = experiencia; 
  }

  obtenerDetalles() {
    return `Dr. ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia: ${this.experiencia} años.`;
  }
}

// Subclase Cirujano
class Cirujano extends Doctor {
  constructor(nombre, especialidad, experiencia, especializacionQuirurgica) {
    super(nombre, especialidad, experiencia);
    this.especializacionQuirurgica = especializacionQuirurgica;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()} Especialización Quirúrgica: ${
      this.especializacionQuirurgica
    }.`;
  }
}

// Exportar las clases
export { Doctor, Cirujano };
