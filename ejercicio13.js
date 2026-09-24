// Cinco miembros de un club quieren saber cuánto subieron o bajaron de peso desde
// la última reunión. Por cada miembro se lee su peso anterior y luego se pesa en 10
// básculas distintas para obtener un promedio.

        function leerPromedioBasculas(cantidadBasculas) {
            let sumaPesos = 0;
            for (let i = 1; i <= cantidadBasculas; i++) {
                const peso = parseFloat(`prompt(Peso registrado en la báscula ${i}:)`);
                sumaPesos += peso;
            }
            return sumaPesos / cantidadBasculas;
        }

        function generarLetrero(diferencia) {
            if (diferencia > 0) {
                return "SUBIÓ";
            } else if (diferencia < 0) {
                return "BAJÓ";
            } else {
                return "SE MANTUVO";
            }
        }

        function obtenerValorAbsoluto(numero) {
            if (numero < 0) {
                return numero * -1;
            } else {
                return numero;
            }
        }

        const cantidadMiembros = 5;
        const cantidadBasculas = 10;

        for (let i = 1; i <= cantidadMiembros; i++) {
            console.log(`Miembro ${i}`);
            const pesoAnterior = parseFloat(prompt("Peso anterior:"));
            const promedioActual = leerPromedioBasculas(cantidadBasculas);
            const diferencia = promedioActual - pesoAnterior;
            const letrero = generarLetrero(diferencia);
            const kilos = obtenerValorAbsoluto(diferencia);

            if (letrero === "SE MANTUVO") {
                console.log(letrero);
            } else {
                console.log(`${letrero} ${kilos} kg`);
            }
        }