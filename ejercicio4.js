//Una persona invierte su dinero en un banco que paga 2% de interés mensual. La ganancia de
//cada mes se reinvierte. Leer el capital inicial y la cantidad de meses. Mostrar el saldo al final de
//cada mes y la ganancia total.

const capitalInicial = parseFloat(prompt("Ingrese el capital inicial:"));
const cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses:"));
let saldo = capitalInicial;
let gananciaTotal = 0;  

for (let mes = 1; mes <= cantidadMeses; mes++) {
    const gananciaMensual = saldo * 0.02; 
    saldo += gananciaMensual; 
    gananciaTotal += gananciaMensual;  

    console.log(`Mes ${mes}: Saldo = ${saldo}, Ganancia mensual = ${gananciaMensual}`);
}   
console.log(`Ganancia total: ${gananciaTotal}`);