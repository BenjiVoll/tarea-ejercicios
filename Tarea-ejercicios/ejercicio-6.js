// ejercicio funciones

// Crea una función que reciba un string y retorne el string en mayúsculas.

const mayus = convertMayus("manuel")
console.log(mayus)

function convertMayus (nombre){
  return nombre.toUpperCase();
}

// Crea una función que reciba un string y retorne el string en minusculas.
const minus = convertMinus("MANUEL")
console.log(minus)

function convertMinus (nombre){ 
  return nombre.toLowerCase();
}

// Crear una función que reciba como parámetro 2 números y los reste.

function resta (numero1, numero2) {
  return numero1 - numero2
}

  const resultado1 = resta(30, 4)
  console.log(resultado1)

// Crear una función que reciba como parámetro 2 números y los divida.

function division (numero1, numero2) {
  return numero1 / numero2
}

const resultado2 = division(30, 4)
console.log(resultado2)


// Crear una función que reciba como parámetro 2 números y los multiplique.

function multiplicacion (numero1, numero2) {
  return numero1 * numero2
}

const resultado3 = multiplicacion(30, 4)
console.log(resultado3)

// Crear una función que reciba un string y devuelva la longitud del string.

const longitud = convertLength("Hello World!")
console.log(longitud)

function convertLength (nombre){ 
  return nombre.length
}