# Hospital Nueva Vida - Sitio Web

En esta parte del proyecto hemos integrado tres paradigmas de programación en JavaScript: funcional, orientada a eventos y orientada a objetos. A continuación, se describen los puntos implementados hasta el momento.

---

## 1. Programación Funcional
### Implementaciones realizadas:
- **Currying:** Se implementó una función curried en el archivo `calculadoraServicios.js` para calcular el costo total de los servicios médicos en función del precio por consulta y el número de consultas realizadas.
- **Funciones flecha:** Todas las funciones utilizan una sintaxis moderna con funciones flecha para mayor legibilidad.

### Archivos relacionados:
- `calculadoraServicios.js`

---

## 2. Programación Orientada a Eventos
### Implementaciones realizadas:
- **Manejo de eventos en formularios:** En el archivo `formulario.js`, se implementó un listener para capturar el evento de envío del formulario en la página `contacto.html`. Al enviar el formulario, se muestra un mensaje de confirmación y se restablece el formulario.

### Archivos relacionados:
- `formulario.js`
- Página HTML: `contacto.html`

---

## 3. Programación Orientada a Objetos
### Implementaciones realizadas:
- **Clases y herencia:** Se creó una clase base `Doctor` y una subclase `Cirujano` en el archivo `clases.js`. 
  - La clase `Doctor` incluye las propiedades `nombre`, `especialidad` y `experiencia`, junto con un método para mostrar detalles.
  - La subclase `Cirujano` extiende la clase base y sobrescribe el método para incluir información adicional sobre especialización quirúrgica.
- **Polimorfismo:** Se aplicó sobrescritura de métodos en la subclase `Cirujano`.

- ### Archivos relacionados:
- `clases.js`




### **Tecnologías Usadas**

- HTML: Para la estructura de la página.
- CSS/SASS: Para los estilos y diseño visual.
- JavaScript (ES6): Para la lógica de la aplicación y manejo de eventos.
- JSON: Para gestionar y manipular datos de los doctores.
- DOM (Document Object Model): Para la interacción dinámica con la página.
- Consola del Navegador: Para pruebas y depuración.

Carlos Farias Galdames





