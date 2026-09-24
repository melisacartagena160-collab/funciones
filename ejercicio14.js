// Un cajero registra los precios de los artículos de cada cliente. Un precio de 0
// cierra la cuenta de ese cliente y se muestra su total. Después se pregunta si hay
// otro cliente (S/N).

        function atenderCliente(numeroCliente) {
            let total = 0;
            let precio = parseFloat(prompt("Precio del artículo (0 para cerrar la cuenta):"));

            while (precio !== 0) {
                total += precio;
                precio = parseFloat(prompt("Precio del artículo (0 para cerrar la cuenta):"));
            }

            console.log(`Total cliente ${numeroCliente}: $${total}`);
            return total;
        }

        function hayOtroCliente() {
            const respuesta = prompt("¿Hay otro cliente? (S/N):");
            return respuesta.toUpperCase() === "S";
        }

        let clientesAtendidos = 0;
        let totalDia = 0;
        let compraMasAlta = 0;
        let clienteMasAlto = 0;
        let hayCliente = true;

        while (hayCliente) {
            clientesAtendidos++;
            console.log(`Cliente ${clientesAtendidos}`);
            const totalCliente = atenderCliente(clientesAtendidos);
            totalDia += totalCliente;

            if (totalCliente > compraMasAlta) {
                compraMasAlta = totalCliente;
                clienteMasAlto = clientesAtendidos;
            }
            hayCliente = hayOtroCliente();
        }

        console.log(`Clientes atendidos: ${clientesAtendidos}`);
        console.log(`Total cobrado: $${totalDia}`);
        console.log(`Compra más alta: cliente ${clienteMasAlto} con $${compraMasAlta} `);