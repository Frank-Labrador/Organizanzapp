
function simuladorAhorros(salario, arriendo, seguroVehiculo) {
    let totalAhorro = 0;
    const nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const numMeses = Number(prompt("ingrese el numero de meses a simular"))


    const listaDeGastos = []
    for (let i = 0; i < numMeses; i += 1) {
        let gasto = {
            //rango entre 200$ y 50$
            comida: Math.ceil(Math.random() * (200 - 100 + 1)) + 100,
            //rango entre 40$ y 15$
            luz: Math.ceil(Math.random() * (40 - 15 + 1)) + 15,
            //rango 20$ y 5$
            agua: Math.ceil(Math.random() * (20 - 5 + 1)) + 5,
            //rango entre 80$ y 50$
            impuestos: Math.ceil(Math.random() * (100 - 50 + 1)) + 50,
            //Capricho "necesario"
            capricho: Math.ceil(Math.random()) * 200,

            mes: nombreMeses[i%12]
        }

        listaDeGastos.push(gasto)

        let ahorro = salario - arriendo - gasto.comida - gasto.luz - gasto.agua - seguroVehiculo - gasto.impuestos - gasto.capricho;




        if (ahorro > 0) {
            console.log(nombreMeses[i%12] + ": Pudiste ahorrar " + ahorro + " Dolares ");
            totalAhorro += ahorro;
        } else {
            console.log(nombreMeses[i%12] + ": No ahorraste nada, salame");
        }

    }

    console.log("Ahorro total en " + numMeses + " meses: " + totalAhorro + " Dolares");
    alert("Ahorro total en " + numMeses + " meses: " + totalAhorro + " Dolares");

    console.table(listaDeGastos)

    let gastosFebrero = filtroPorMes(listaDeGastos,"Febrero")
    console.table(gastosFebrero);
}


function filtroPorMes(listaDeGastos, mes){
    
    return listaDeGastos.filter(gasto => gasto.mes==mes)
}

simuladorAhorros(1200, 600, 100);








