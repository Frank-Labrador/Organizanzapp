// tabla.js
//funcion para buscar y obtener el resultado en el localStorage del usuario
function obtenerResultadosLocalStorage() {
    const jsonString = localStorage.getItem("datosUsuario");
    return jsonString ? JSON.parse(jsonString) : {
        "nombre": "",
        "apellido": "",
        "resultado": []
    };
}

function agregarResultadoATabla() {
    let tabla = document.querySelector("#tablaDeAhorro");
    let usuario = obtenerResultadosLocalStorage();

    //seteando el nombre de usuario en la pantalla
    document.querySelector("#usuarioTabla").value = usuario.nombre + " " + usuario.apellido;

    // Obtener el símbolo de moneda desde el local storage
    const simboloGuardado = localStorage.getItem("simboloMoneda");

    // Asignar el símbolo de moneda al elemento del DOM
    document.querySelector(".simboloMoneda").textContent = simboloGuardado || "";

    let sumaTotal = 0;
    let mesActual = 0;

    usuario.resultado.forEach(ahorro => {
        let fila = tabla.insertRow();
        let celdaMes = fila.insertCell(0);
        let celdaAhorro = fila.insertCell(1);

        // Asignar valores a las celdas
        celdaMes.textContent = obtenerMeses(mesActual);
        celdaAhorro.textContent = (ahorro);

        // Incrementar el mes actual para la siguiente iteración
        mesActual = (mesActual + 1) % 12;

        sumaTotal += ahorro;
    });

    document.querySelector("#sumaTotal").value = sumaTotal.toString();

}

function obtenerMeses(indice) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return meses[indice];
}

function crearGrafica() {
    const contenedorGrafica = document.getElementById("graficaMeses");
    const usuario = obtenerResultadosLocalStorage();

    const canvas = document.getElementById("graficaMeses");
    canvas.width = contenedorGrafica.clientWidth;
    canvas.height = contenedorGrafica.clientHeight;


    const meses = usuario.resultado.map((_, indice) => obtenerMeses(indice % 12));

    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: meses,
            datasets: [{
                label: "Ahorros por Mes",
                data: usuario.resultado,
                backgroundColor: 'rgba(151, 219, 79)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1 
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



document.addEventListener("DOMContentLoaded", function() {
    agregarResultadoATabla();
    crearGrafica();
});

