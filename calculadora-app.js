const sumar = require("./modules/sumar");
const restar = require("./modules/restar");
const multiplicar = require("./modules/multiplicar");
const dividir = require("./modules/dividir");

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);
const operador = process.argv[4];

let resultado;

switch (operador) {
  case "+":
    resultado = sumar(num1, num2);
    break;
  case "-":
    resultado = restar(num1, num2);
    break;
  case "*":
    resultado = multiplicar(num1, num2);
    break;
  case "/":
    resultado = dividir(num1, num2);
    break;
  default:
    console.log("Operador no aceptado");
    process.exit(1);
}

console.log(`Resultado: ${resultado}`);