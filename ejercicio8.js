//Un centro de verificación quiere saber el promedio de puntos contaminantes de los primeros 25
//automóviles que lleguen. También quiere saber los puntos del auto que menos contaminó y del
//que más contaminó.


const totalAutos = 25;
let sumaPuntos = 0;
let puntosMinimos = Infinity;
let puntosMaximos = -Infinity;  

for (let i = 1; i <= totalAutos; i++) {
    const puntosContaminantes = parseFloat(prompt(`Ingrese los puntos contaminantes del automóvil ${i}:`));
    sumaPuntos += puntosContaminantes;

    if (puntosContaminantes < puntosMinimos) {
        puntosMinimos = puntosContaminantes;
    }
    if (puntosContaminantes > puntosMaximos) {
        puntosMaximos = puntosContaminantes;
    }   
}
const promedioPuntos = sumaPuntos / totalAutos; 

console.log(`Promedio de puntos contaminantes: ${promedioPuntos}`); 
console.log(`Puntos del auto que menos contaminó: ${puntosMinimos}`);
console.log(`Puntos del auto que más contaminó: ${puntosMaximos}`); 