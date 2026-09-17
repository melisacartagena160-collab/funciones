//Leer 10 números. Por cada número mostrar su cubo y su cuarta parte. Al terminar, mostrar la
//suma de todos los cubos.

let sumaCubos = 0;

for (let i = 1; i <= 10; i++) {
  const num = Number(prompt("Número " + i + ":"));
  const cubo = num ** 3;
  const cuartaParte = num / 4;

  sumaCubos += cubo;
  console.log("Número: " + num + " | Cubo: " + cubo + " | Cuarta parte: " + cuartaParte);
}

console.log("Suma de los cubos: " + sumaCubos);