
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
//agregamos al array el objeto gasto
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
//Resultado del mes de febrero en este metodo
    let gastosFebrero = filtroPorMes(listaDeGastos,"Febrero")
    console.table(gastosFebrero);
}

//metodo para dar resultados por mes en el simulador
function filtroPorMes(listaDeGastos, mes){
    
    return listaDeGastos.filter(gasto => gasto.mes==mes)
}

//simuladorAhorros(1200, 600, 100);





//Creamos la funcion para crear el simulador de ahorro que interactua con el DOM
function simuladorAhorro(){
    const nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let salario = parseInt(document.querySelector("#salario").value);
    let arriendo = parseInt(document.querySelector("#arriendo").value);
    let transporte =parseInt( document.querySelector("#transporte").value);
    let comida = parseInt(document.querySelector("#comida").value);
    let luz = parseInt(document.querySelector("#luz").value);
    let agua = parseInt(document.querySelector("#agua").value);
    let impuestos = parseInt(document.querySelector("#impuestos").value);
    let gastosVarios = parseInt(document.querySelector("#gastosVarios").value);

    let gastos = arriendo + transporte + comida + luz + agua + impuestos + gastosVarios;
    let gastoTotal = salario - gastos;
    document.querySelector("#resultado").value = gastoTotal;

    //colocamos una condicion para cuando den numeros negativos
    let resultadoInput = document.querySelector("#resultado");
    if (gastoTotal >= 0) {
        resultadoInput.value = gastoTotal;
    } else {
        //cambiamos temporalmente de input a text
        resultadoInput.type = "text";
        resultadoInput.value = "No Ahorraste nada :C";
        //luego retomamos el input a number
        setTimeout(function() {
            resultadoInput.type = "number";
            resultadoInput.value = "";
        }, 5000);
    }

    //se utiliza un nombre aleatorio de prueba
    let usuario = [{ 
        "usuario": {
            "nombre": "Juan",
            "apellido": "Perez"
        } 
    }]
    
    //array de objeto para el calculo de meses
    nombreMeses.forEach((mes, index) => {
        let calculo =  {
            "salario" : salario,
            "arriendo" : arriendo,
            "transporte" : transporte* (index+1),
            "comida" : comida* (index+1),
            "luz" : luz* (index+1),
            "agua" : agua* (index+1),
            "impuestos" : impuestos* (index+1),
            "gastosVarios" : gastosVarios* (index+1),
        }
        usuario.push(calculo);
        
    });

    let jsonString = JSON.stringify(usuario);
    
    localStorage.setItem("resultado", jsonString);
}
    








