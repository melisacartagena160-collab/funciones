//Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
//día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
//promedio en °C.

const dias = Number(prompt("¿Cuántos días?:"));
let sumaTemperaturas = 0;

for (let i = 1; i <= dias; i++) {
  const celsius = Number(prompt("Temperatura día " + i + " (°C):"));
  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  sumaTemperaturas += celsius;
  console.log("Día " + i + ": " + celsius + " °C = " + kelvin + " K = " + fahrenheit + " °F");
}

if (dias > 0) {
  const promedio = sumaTemperaturas / dias;
  console.log("Promedio: " + promedio + " °C");
}