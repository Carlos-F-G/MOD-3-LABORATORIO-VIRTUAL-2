# Hospital Nueva Vida - Sitio Web

¿Qué es el event loop en JavaScript?

El event loop es el mecanismo que JavaScript usa para gestionar la ejecución de tareas, manejar eventos, y procesar operaciones asíncronas, como temporizadores o peticiones de red. Es fundamental para entender cómo JavaScript, siendo de un solo hilo, maneja múltiples operaciones.

Explicación del event loop
Componentes clave:

Call Stack (Pila de llamadas): Es una estructura de datos donde se almacena el orden en que se ejecutan las funciones. Las funciones entran a la pila cuando se invocan y salen cuando terminan su ejecución.
Heap: Es el lugar donde se almacena la memoria para los objetos y variables creados en JavaScript.
Task Queue (Cola de tareas): Es una lista donde se almacenan las tareas asíncronas (por ejemplo, un setTimeout o un evento del DOM) que están listas para ser ejecutadas.
Flujo del event loop:

JavaScript ejecuta las funciones en el Call Stack de manera sincrónica.
Cuando una operación asíncrona (como un setTimeout) termina, su callback es enviado a la Task Queue.
El event loop verifica si el Call Stack está vacío. Si lo está, toma la primera tarea de la Task Queue y la empuja al Call Stack para ser ejecutada.


# Path to the README.md file
readme_path = os.path.join(main_folder_path, 'README.md')

# Content to add about the event loop
event_loop_content = """
## Funcionamiento del Event Loop en JavaScript

El Event Loop en JavaScript es el mecanismo que permite gestionar tareas sincrónicas y asíncronas en un único hilo de ejecución. Aquí explicamos sus principales componentes:

### Componentes clave:
1. **Call Stack (Pila de llamadas):**
   Una estructura de datos que almacena las funciones a ejecutar en orden. Las funciones se añaden a la pila al ser invocadas y se eliminan al finalizar.

2. **Heap:**
   El lugar donde se almacena la memoria dinámica para objetos y variables creadas.

3. **Task Queue (Cola de tareas):**
   Una lista de tareas asíncronas que están listas para ser ejecutadas, como callbacks de `setTimeout`, eventos del DOM, o peticiones AJAX.

### Flujo del Event Loop:
1. JavaScript ejecuta las funciones en la **Call Stack** de manera sincrónica.
2. Las operaciones asíncronas (como un `setTimeout`) se envían a la **Task Queue**.
3. El Event Loop verifica si la **Call Stack** está vacía. Si lo está, toma la primera tarea de la **Task Queue** y la pasa a la **Call Stack** para ejecutarla.




2. Manejo de Variables, Operadores y Prompt


Solicita información al usuario mediante prompts


Implementación

Solicitar el nombre, email, y teléfono del usuario mediante prompt.

Mostrar esta información en:
Una alerta en el navegador.
La consola del navegador.



Alcance (Scope) de Variables en JavaScript
En JavaScript, el scope determina dónde están disponibles las variables declaradas dentro del código. Existen tres tipos principales de alcance:

Tipos de Scope:
Global Scope:

Una variable declarada fuera de cualquier función o bloque tiene un alcance global. Es accesible en cualquier parte del programa.
Function Scope:

Las variables declaradas dentro de una función solo están disponibles dentro de esa función.
Block Scope:

Las variables declaradas con let o const dentro de un bloque ({ }) están disponibles solo dentro de ese bloque.