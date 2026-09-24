function esNotaValida(nota) {
            return nota >= 0 && nota <= 5;
        }

        function estaAprobado(nota) {
            return nota >= 3;
        }

        let notasValidas = 0;
        let sumaNotas = 0;
        let notaMasBaja = 0;
        let aprobados = 0;
        let esLaPrimera = true;

        let nota = parseFloat(prompt("Ingrese una nota (-1 para terminar):"));

        while (nota !== -1) {
            if (esNotaValida(nota)) {
                if (esLaPrimera || nota < notaMasBaja) {
                    notaMasBaja = nota;
                    esLaPrimera = false;
                }
                sumaNotas += nota;
                notasValidas++;
                if (estaAprobado(nota)) {
                    aprobados++;
                }
            } else {
                console.log("Nota inválida, debe estar entre 0 y 5");
            }
            nota = parseFloat(prompt("Ingrese una nota (-1 para terminar):"));
        }

        console.log(`Notas válidas: ${notasValidas}`);
        console.log(`Promedio: ${(sumaNotas / notasValidas)}`);
        console.log(`Nota más baja: ${notaMasBaja}`);
        console.log(`Aprobados: ${aprobados}`);