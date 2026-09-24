// En un grupo de N aprendices se lee, uno por uno, el género (H o M) y la edad.
// Mostrar cuántos hombres y cuántas mujeres hay, el promedio de edad de los
// hombres, el de las mujeres y el de todo el grupo.

        function esHombre(genero) {
            return genero === "H";
        }

        function calcularPromedio(suma, cantidad) {
            return suma / cantidad;
        }

        const cantidadPersonas = parseInt(prompt("¿Cuántas personas hay en el grupo?"));

        let hombres = 0;
        let mujeres = 0;
        let sumaEdadesHombres = 0;
        let sumaEdadesMujeres = 0;
        let sumaEdadesGrupo = 0;

        for (let i = 1; i <= cantidadPersonas; i++) {
            const genero = prompt(`Género de la persona ${i} (H/M):`);
            const edad = parseInt(prompt(`Edad de la persona ${i}:`));

            if (esHombre(genero)) {
                hombres++;
                sumaEdadesHombres += edad;
            } else {
                mujeres++;
                sumaEdadesMujeres += edad;
            }
            sumaEdadesGrupo += edad;
        }

        if (hombres > 0) {
            console.log(`Hombres: ${hombres} | Promedio de edad: ${calcularPromedio(sumaEdadesHombres, hombres)}`);
        } else {
            console.log("No se registraron hombres en el grupo");
        }

        if (mujeres > 0) {
            console.log(`Mujeres: ${mujeres} | Promedio de edad: ${calcularPromedio(sumaEdadesMujeres, mujeres)}`);
        } else {
            console.log("No se registraron mujeres en el grupo");
        }

        console.log(`Promedio del grupo: ${calcularPromedio(sumaEdadesGrupo, cantidadPersonas)}`)