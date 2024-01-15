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

let mesActual = 0;

function agregarResultadoATabla() {
    let tabla = document.querySelector("#tablaDeAhorro");
    let usuario = obtenerResultadosLocalStorage();
    document.querySelector("#usuarioTabla").value = usuario.nombre + " " + usuario.apellido;

    let sumaTotal=0;

    usuario.resultado.forEach((ahorro, index) => {
        let fila = tabla.insertRow();
        let celdaMes = fila.insertCell(0);
        let celdaAhorro = fila.insertCell(1);

        // Asignar valores a las celdas
        celdaMes.textContent = obtenerMeses(index);
        celdaAhorro.textContent = ahorro;

        // Incrementar el mes actual para la siguiente iteración
        mesActual = (mesActual + 1) % 12;

        sumaTotal += ahorro;

    });
    //mostramos la sumatoria de los meses que llevamos en un input
    document.querySelector("#sumaTotal").value = sumaTotal.toString();
}

function obtenerMeses(indice) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return meses[indice];
}


document.addEventListener("DOMContentLoaded", function() {
    agregarResultadoATabla();
});








