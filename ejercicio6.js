//Una empresa necesita calcular el salario semanal de N obreros. Leer N y luego las horas
//trabajadas de cada obrero.
//Si el obrero trabaja 40 horas o menos, se le paga $12.000 por hora. Si trabaja más de 40, se le
//pagan $12.000 por cada una de las primeras 40 horas y $15.000 por cada hora extra. Mostrar
//el salario de cada obrero y el total de la nómina.

const cantidadObreros = parseInt(prompt("Ingrese la cantidad de obreros:"));
let totalNomina = 0;
    
for (let i = 1; i <= cantidadObreros; i++) {
    const horasTrabajadas = parseFloat(prompt(`Ingrese las horas trabajadas por el obrero ${i}:`));
    let salario = 0;
    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * 12000;
    } else {
        const horasExtra = horasTrabajadas - 40;
        salario = (40 * 12000) + (horasExtra * 15000);
    }
    console.log(`Salario del obrero ${i}: $${salario}`);
    totalNomina += salario;
}
console.log(`Total de la nómina: $${totalNomina}`);