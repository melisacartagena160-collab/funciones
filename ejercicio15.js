//Leer un número N. Mostrar todos los números primos entre 2 y N, y al final
//cuántos hay. Un número es primo si solo es divisible entre 1 y entre sí mismo.

        function contarDivisores(numero) {
            let contador = 0;
            for (let d = 1; d <= numero; d++) {
                if (numero % d === 0) {
                    contador++;
                }
            }
            return contador;
        }

        function esPrimo(numero) {
            return contarDivisores(numero) === 2;
        }

        const limite = parseInt(prompt("Ingrese el límite:"));
        let cantidadPrimos = 0;

        for (let i = 2; i <= limite; i++) {
            if (esPrimo(i)) {
                console.log(i);
                cantidadPrimos++;
            }
        }

        console.log(`Cantidad de primos encontrados: ${cantidadPrimos}`);