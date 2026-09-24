//El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
//adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.
//El juego termina cuando el usuario adivina o se le acaban los intentos. Si adivina, mostrar en
//cuántos intentos lo logró. Si pierde, mostrar cuál era el número.
//Para generar el número usa: Math.floor(Math.random() * 100) + 1.


const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 7;
let adivinado = false;

while (intentos < maxIntentos) {
    const intento = parseInt(prompt(`Intento ${intentos + 1}: Adivina el número secreto (entre 1 y 100):`));

    intentos++;

    if (intento === numeroSecreto) {
        adivinado = true;
        break;
    } else if (intento < numeroSecreto) {
        console.log("El número secreto es mayor.");
    }   
    else {
        console.log("El número secreto es menor.");
    }   
}

if (adivinado) {
    console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
} else {
    console.log(`Lo siento, no adivinaste el número. Era ${numeroSecreto}.`);
}