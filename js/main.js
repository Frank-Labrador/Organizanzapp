// Simulador de ahorros por meses
function simuladorAhorros(salario, arriendo, seguroVehiculo) {
    let totalAhorro = 0;
    const numMeses = Number(prompt("ingrese el numero de meses a simular"))

    for (let i = 0; i < numMeses; i+=1) {
        let comida = Math.ceil(Math.random() * (200 - 50 + 1)) + 50;
        let luz = Math.ceil(Math.random() * (40 - 15 + 1)) + 15;
        let agua = Math.ceil(Math.random() * (20 - 5 + 1)) + 5;
        let impuestos = Math.ceil(Math.random() * (80 - 50 + 1)) + 50;
        let ahorro = salario - arriendo - comida - luz - agua - seguroVehiculo - impuestos;


        if (ahorro > 0) {
            console.log("Mes " + (i + 1) + ": Pudiste ahorrar " + ahorro);
            totalAhorro += ahorro;
        } else {
            console.log("Mes " + (i + 1) + ": No ahorraste nada, salame");
        }
    }

console.log("Ahorro total en " + numMeses + " meses: " + totalAhorro);
alert("Ahorro total en " + numMeses + " meses: " + totalAhorro);
}

simuladorAhorros(1200, 600, 100);

