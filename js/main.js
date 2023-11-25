// Simulador de ahorros por meses
function simuladorAhorros(salario, arriendo, seguroVehiculo) {
    let totalAhorro = 0;
    const numMeses = Number(prompt("ingrese el numero de meses a simular"))

    for (let i = 0; i < numMeses; i+=1) {
        //rango entre 200$ y 50$
        let comida = Math.ceil(Math.random() * (200 - 100 + 1)) + 100;
        //rango entre 40$ y 15$
        let luz = Math.ceil(Math.random() * (40 - 15 + 1)) + 15;
        //rango 20$ y 5$
        let agua = Math.ceil(Math.random() * (20 - 5 + 1)) + 5;
        //rango entre 80$ y 50$
        let impuestos = Math.ceil(Math.random() * (100 - 50 + 1)) + 50;
        //Capricho "necesario"
        let capricho = Math.ceil(Math.random()) * 200; 

        let ahorro = salario - arriendo - comida - luz - agua - seguroVehiculo - impuestos - capricho;


        if (ahorro > 0) {
            console.log("Mes " + (i + 1) + ": Pudiste ahorrar " + ahorro + " Dolares ");
            totalAhorro += ahorro;
        } else {
            console.log("Mes " + (i + 1) + ": No ahorraste nada, salame");
        }
    }

console.log("Ahorro total en " + numMeses + " meses: " + totalAhorro + " Dolares");
alert("Ahorro total en " + numMeses + " meses: " + totalAhorro + " Dolares");
}

simuladorAhorros(1200, 600, 100);

