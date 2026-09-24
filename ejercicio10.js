// Un listado de personas recibe una cantidad de dólares. Por cada persona mostrar el
// equivalente en pesos, sabiendo que el dólar cuesta $3.550. El listado termina cuando se
// ingresa 0.
// Al final, mostrar cuántas personas se atendieron y el total en pesos. El 0 no cuenta como
// persona.

const tasaCambio = 3.550;

let totalPersonas = 0;
let totalPesos = 0;

while (true) {
    const dolares = parseFloat(prompt("Ingrese la cantidad de dólares (0 para terminar):"));        

    if (dolares === 0) {
        break;
    }

    const pesos = dolares * tasaCambio;
    console.log(`Equivalente en pesos: $${pesos}`);

    totalPersonas++;
    totalPesos += pesos;
}

console.log(`Cantidad de personas atendidas: ${totalPersonas}`);
console.log(`Total en pesos: $${totalPesos}`);