// ejercicio ciclos

console.log("Secuencia: ");
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

console.log("Secuencia invertida: ");
for (let i = 10; i >= 1; i--) {
  console.log(i)
}

console.log("Pares: ");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0){
    console.log(i)
  } 
}

console.log("Impares: ");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1){
    console.log(i)
  } 
}

console.log("Multiplos de 3: ");
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0){
    console.log(i)
  } 
}

console.log("Multiplos de 5: ");
for (let i = 1; i <= 10; i++) {
  if (i % 5 == 0){
    console.log(i)
  } 
}

console.log("Multiplos de 3 y 5: ");
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0 && i % 5 == 0){
    console.log(i)
  } 
}

console.log("Multiplos de 3 o de 5: ");
for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0 || i % 5 == 0){
    console.log(i)
  } 
}

