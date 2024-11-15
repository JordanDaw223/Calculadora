# Calculadora Interactiva en JavaScript
Este proyecto es una calculadora interactiva simple implementada en JavaScript que permite al usuario realizar operaciones matemáticas básicas como suma, resta, multiplicación, división y cálculo de raíces cuadradas. La calculadora también ofrece la opción de ver un historial de las operaciones realizadas y salir de la aplicación cuando lo desee.

## Descripción
La calculadora solicita al usuario que elija una operación matemática, luego pide los números correspondientes, realiza el cálculo y muestra el resultado. Además, todas las operaciones realizadas se almacenan en un historial que el usuario puede consultar en cualquier momento.

## Las operaciones disponibles incluyen:

Suma
Resta
Multiplicación
División (con validación de división por cero)
Raíz cuadrada
Historial (ver las operaciones previas)
Salir (termina la aplicación)
Funcionalidad
1. Operaciones Matemáticas
El usuario puede seleccionar una de las siguientes operaciones:

Sumar: Suma dos números.
Restar: Resta dos números.
Multiplicar: Multiplica dos números.
Dividir: Divide dos números, con validación para evitar la división por cero.
Raíz cuadrada: Calcula la raíz cuadrada de un solo número.

2. Validación de Entradas
La calculadora asegura que:

Los números ingresados sean válidos (utilizando parseFloat y comprobando que no sean NaN).
En el caso de la división, el segundo número no sea cero, lo que causaría un error de división.
3. Historial de Operaciones
Cada operación realizada se guarda en un historial. El usuario puede ver el historial de todas las operaciones previas utilizando el comando "historial". Cada entrada del historial incluye:

El tipo de operación (suma, resta, multiplicación, etc.)
Los números involucrados
El resultado de la operación

4. Interactividad con el Usuario
Se usa prompt para obtener la entrada del usuario.
Se muestran los resultados de las operaciones y los mensajes de error a través de alert.

5. Ciclo de Ejecución
El ciclo principal de la calculadora continúa ejecutándose hasta que el usuario elija la opción "salir". Esto permite realizar múltiples operaciones sin tener que recargar la página.

Flujo de Uso
El programa solicita al usuario que elija una operación.
Según la operación seleccionada, el usuario ingresa los números requeridos.
La calculadora realiza el cálculo y muestra el resultado en un cuadro de alert.
La operación se guarda en el historial de operaciones.
El usuario puede ver el historial de las operaciones realizadas, continuar con nuevas operaciones o finalizar la aplicación.
Cuando el usuario selecciona la opción "salir", el programa muestra un mensaje de despedida y termina.