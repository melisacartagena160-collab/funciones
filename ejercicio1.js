//Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
//multiplicando, el multiplicador y el producto.

const numero=parseInt(prompt("ingrese un numero para mostrar su tabla de multiplicar:"));{
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const producto = numero * i;
        console.log(`${numero} x ${i} = ${producto}`);
    }   
}