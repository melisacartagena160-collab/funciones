//Al cerrar un expendio de naranjas, 15 clientes que no han pagado reciben un 15% de
//descuento si compraron más de 10 kilos. Leer primero el precio por kilo y luego los kilos de
//cada cliente.
//Mostrar cuánto paga cada cliente, el total que recibe la tienda y cuántos clientes obtuvieron
//descuento.

const precioPorKilo = parseFloat(prompt("Ingrese el precio por kilo de naranjas:"));
let totalRecibido = 0;
let clientesConDescuento = 0;

for (let i = 1; i <= 15; i++) {
    const kilosComprados = parseFloat(prompt(`Ingrese los kilos comprados por el cliente ${i}:`));
    let totalCliente = kilosComprados * precioPorKilo;

    if (kilosComprados > 10) {
        totalCliente *= 0.85;
        clientesConDescuento++;
    }   
    totalRecibido += totalCliente;
}
console.log(`Total recibido por la tienda: $${totalRecibido}`);
console.log(`Cantidad de clientes que obtuvieron descuento: ${clientesConDescuento}`);