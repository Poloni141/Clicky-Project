let entrada1 = parseInt(prompt('Ingrese un numero para realizar la operacion'))
let entrada2 = parseInt(prompt('Ingrese otro numero para realizar la operacion'))
let operacion = prompt('Ingrese el simbolo de la operacion que desea realizar: + - / *')

const resultados = []

function calculadora(entrada1, entrada2, operacion) {
    let resultado = 0;
    switch(operacion) {
        case '+':
            resultado = entrada1 + entrada2;
            break;
        case '-':
            resultado = entrada1 - entrada2;
            break;
        case '/':
            resultado = entrada1 / entrada2;
            break;
        case '*':
            resultado = entrada1 * entrada2;
            break;
        default:
            alert('Seleccione nuevamente entre las opciones de suma, resta, multiplicacion y division ingresando alguno de los simbolos: + - / *');
            break;
        }
    return resultado;
}
alert(`El resultado es ${calculadora(entrada1, entrada2, operacion)}`)
resultados.push(calculadora(entrada1, entrada2, operacion))
console.log(resultados.length)