// ejercicio Condicionales

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// mayor y menor

if (numero1 > numero2 && numero1 > numero3){
  console.log(numero1 + " es mayor que " + numero2 + " y que " + numero3);
}

if (numero2 > numero1 && numero2 > numero3){
  console.log(numero1 + " es mayor que " + numero2 + " y que " + numero3);
}

if (numero3 > numero1 && numero3 > numero1){
  console.log(numero1 + " es mayor que " + numero2 + " y que " + numero3);
}

// par o impar

if (numero1 % 2 == 0){
  console.log(numero1 + " es par");
} else {
  console.log(numero1 + " es impar");
}

if (numero2 % 2 == 0){
  console.log(numero2 + " es par");
} else {
  console.log(numero2 + " es impar");
}

if (numero3 % 2 == 0){
  console.log(numero3 + " es par");
} else {
  console.log(numero3 + " es impar");
}

// Multiplo de 5

if (numero1 % 5 === 0) {
  console.log(numero1 + " es múltiplo de 5");
} else {
  console.log(numero1 + " no es múltiplo de 5");
}

if (numero2 % 5 === 0) {
  console.log(numero2 + " es múltiplo de 5");
} else {
  console.log(numero2 + " no es múltiplo de 5");
}

if (numero3 % 5 === 0) {
  console.log(numero3 + " es múltiplo de 5");
} else {
  console.log(numero3 + " no es múltiplo de 5");
}