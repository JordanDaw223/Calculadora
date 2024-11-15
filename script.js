
// Función principal de la calculadora
function calculadora() {
    let num1;  // Variable para almacenar el primer número
    let num2;  // Variable para almacenar el segundo número
    let tipo;  // Variable para almacenar el tipo de operación que el usuario selecciona
    const historial = []; // Historial como un array vacío para almacenar los objetos de las operaciones

    // Función para validar los inputs de la operación
    function validarInput(tipo) {
        // Ciclo para solicitar el primer número hasta que sea un número válido
        do {
            num1 = parseFloat(prompt("Dame un NUMERO para realizar una operación"));
        } while (isNaN(num1));  // Si no es un número, sigue pidiendo el número

        // Si el tipo de operación no es raíz cuadrada, pide el segundo número
        if (tipo !== "raiz") {
            do {
                num2 = parseFloat(prompt("Dame otro NUMERO para realizar la operación"));
                // Si se intenta dividir por cero, muestra una alerta
                if (tipo === "dividir" && num2 === 0) {
                    alert("Para la división, el segundo número no puede ser 0. Inténtalo de nuevo.");
                }
            } while (isNaN(num2) || (tipo === "dividir" && num2 === 0));  // Valida que el segundo número sea válido y que no sea cero si es división
        }

        return { num1, num2 };  // Devuelve un objeto con los dos números
    }

    // Funciones para cada operación matemática
    function suma(num1, num2) {
        return num1 + num2;  // Suma dos números
    }

    function resta(num1, num2) {
        return num1 - num2;  // Resta dos números
    }

    function multiplicacion(num1, num2) {
        return num1 * num2;  // Multiplica dos números
    }

    function division(num1, num2) {
        return num1 / num2;  // Divide dos números
    }

    function raizCuadrada(num1) {
        return Math.sqrt(num1);  // Calcula la raíz cuadrada de un número
    }

    // Función principal que realiza la operación y guarda los resultados en el historial
    function operacion(num1, num2, tipo) {
        let resultado;  // Variable para almacenar el resultado de la operación
        let calculo = {};  // Objeto para almacenar los datos de la operación

        // Según el tipo de operación, realiza la operación correspondiente
        switch (tipo) {
            case "sumar":
                resultado = suma(num1, num2);  // Realiza la suma
                alert("El resultado de la suma es: " + resultado);
                calculo = { tipo: "suma", num1: num1, num2: num2, resultado: resultado };  // Almacena los detalles de la operación en el objeto
                break;

            case "restar":
                resultado = resta(num1, num2);  // Realiza la resta
                alert("El resultado de la resta es: " + resultado);
                calculo = { tipo: "resta", num1: num1, num2: num2, resultado: resultado };  // Almacena los detalles de la operación
                break;

            case "multiplicar":
                resultado = multiplicacion(num1, num2);  // Realiza la multiplicación
                alert("El resultado de la multiplicación es: " + resultado);
                calculo = { tipo: "multiplicación", num1: num1, num2: num2, resultado: resultado };  // Almacena los detalles de la operación
                break;

            case "dividir":
                resultado = division(num1, num2);  // Realiza la división
                alert("El resultado de la división es: " + resultado);
                calculo = { tipo: "división", num1: num1, num2: num2, resultado: resultado };  // Almacena los detalles de la operación
                break;

            case "raiz":
                resultado = raizCuadrada(num1);  // Calcula la raíz cuadrada
                alert("El resultado de la raíz cuadrada es: " + resultado);
                calculo = { tipo: "raíz cuadrada", num1: num1, resultado: resultado };  // Almacena los detalles de la operación (solo num1 y resultado)
                break;

            default:
                alert("No ha elegido bien ninguna operación, repítalo por favor");  // Si el tipo no es reconocido, muestra un mensaje de error
                return;  // Sale de la función sin hacer nada
        }

        // Almacena el objeto de la operación en el historial
        historial.push(calculo);
    }

    // Función para mostrar el historial de operaciones
    function mostrarHistorial() {
        if (historial.length === 0) {
            console.log("No hay historial de operaciones.");  // Si el historial está vacío, muestra un mensaje
        } else {
            let historialTexto = "Historial de operaciones:\n";  // Comienza el texto que mostrará el historial

            // Itera sobre cada operación en el historial y crea un texto con los detalles
            historial.forEach(function(calculo, index){
                historialTexto += `Tipo: ${calculo.tipo}, Números: ${calculo.num1}, ${calculo.num2}, Resultado: ${calculo.resultado}\n`;
            });

            // Muestra el historial completo por consola
            console.log(historialTexto);
        }
    }   
    
    // Ciclo principal de la calculadora
    do {
        // Pide al usuario que elija una operación
        tipo = prompt("¿Qué operación quieres realizar? Escribe:\n sumar\n restar\n multiplicar\n dividir\n raiz para calcular raíz cuadrada\n historial para ver el historial de operaciones\n salir para finalizar\n Todo en minúsculas, por favor.");

        // Si el tipo de operación es suma, resta, multiplicación o división, solicita los números y realiza la operación
        if (tipo === "sumar" || tipo === "restar" || tipo === "multiplicar" || tipo === "dividir") {
            let valores = validarInput(tipo);  // Llama a validarInput para obtener los números
            num1 = valores.num1;
            num2 = valores.num2;
            operacion(num1, num2, tipo);  // Llama a la función operacion con los números y el tipo
        } else if (tipo === "raiz") {
            num1 = parseFloat(prompt("Dame un NUMERO para calcular su raíz cuadrada"));  // Pide solo un número si la operación es raíz cuadrada
            if (!isNaN(num1)) {
                operacion(num1, null, tipo);  // Llama a la operación de raíz cuadrada
            }
        } else if (tipo === "historial") {
            mostrarHistorial();  // Muestra el historial de operaciones
        } else if (tipo !== "salir") {
            alert("Operación no válida. Inténtalo de nuevo.");  // Si la opción no es válida, muestra un mensaje de error
        }

    } while (tipo !== "salir");  // El ciclo continúa hasta que el usuario escriba "salir"

    alert("Has salido de la calculadora.");  // Mensaje cuando el usuario decide salir de la calculadora
}

// Llamada a la función calculadora para iniciar el programa
calculadora();