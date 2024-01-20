//Función para cargar la configuración de moneda desde el JSON
async function cargarConfiguracionMoneda() {
    let monedaConfig;
    try {
        const response = await fetch('./monedas.json');

        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }

        monedaConfig = await response.json();
    } catch (error) {
        console.error(error);
    }

    let contenedorMonedas = document.querySelector("#simboloMoneda");
    let contenidoMoneda = "";

    for (let moneda of monedaConfig){
        contenidoMoneda += ` 
        <input type="radio" id="${moneda.id}" name="tipoMoneda" value="${moneda.id}" onclick="ponerSimbolo('${moneda.simbolo}')"/>
        <label for="${moneda.id}">${moneda.nombre}</label>
        `
    }

    contenedorMonedas.innerHTML = contenidoMoneda;

        // Cargar el símbolo desde el local storage
        const simboloGuardado = localStorage.getItem("simboloMoneda");
        if (simboloGuardado) {
            ponerSimbolo(simboloGuardado);
        }
}

function ponerSimbolo(simbolo){
let contenedores= document.querySelectorAll(".simboloMoneda");

for(let contenedor of contenedores){
contenedor.innerHTML=simbolo;

localStorage.setItem("simboloMoneda", simbolo)
}

}

document.addEventListener('DOMContentLoaded', async function () {
    // Intenta cargar la configuración de moneda al cargar la página
    await cargarConfiguracionMoneda();
});

//Creamos la funcion para crear el simulador de ahorro que interactua con el DOM
function simuladorAhorro() {

    let salario = parseInt(document.querySelector("#salario").value);
    let arriendo = parseInt(document.querySelector("#arriendo").value);
    let transporte = parseInt(document.querySelector("#transporte").value);
    let comida = parseInt(document.querySelector("#comida").value);
    let luz = parseInt(document.querySelector("#luz").value);
    let agua = parseInt(document.querySelector("#agua").value);
    let impuestos = parseInt(document.querySelector("#impuestos").value);
    let gastosVarios = parseInt(document.querySelector("#gastosVarios").value);
    
    let gastos = arriendo + transporte + comida + luz + agua + impuestos + gastosVarios;
    let ahorroTotal = salario - gastos;


    //colocamos una condicion para cuando den numeros negativos
    if (ahorroTotal > 0) {
        let resultadoInput = document.querySelector("#resultado");
        resultadoInput.value = ahorroTotal;

    } else {
        document.querySelector("#noAhorro").classList.remove("noAhorrasteOculto")
        setTimeout(() => {
            document.querySelector("#noAhorro").classList.add("noAhorrasteOculto")
        }, 5000)
    }

    guardarResultado(ahorroTotal);
}

//creamos funcion para que reciba de parametro del resultado del ahorro y guarde en el localStorage
function guardarResultado(resultadoAhorro) {
    const jsonString = localStorage.getItem("datosUsuario");
    let usuario;
    
    if (jsonString) {
        usuario = JSON.parse(jsonString);
        usuario.resultado.push(resultadoAhorro);
    } else {
        usuario = {
            "nombre": "",
            "apellido": "",
            "resultado": [resultadoAhorro]
        }
    }
    
    let usuarioString = JSON.stringify(usuario)
    localStorage.setItem("datosUsuario", usuarioString);
}

function guardarNombre(nombre, apellido) {
    const jsonString = localStorage.getItem("datosUsuario");
    let usuario;
    
    if (jsonString) {
        usuario = JSON.parse(jsonString);
        usuario.nombre = nombre;
        usuario.apellido = apellido;
    } else {
        usuario = {
            "nombre": nombre,
            "apellido": apellido,
            "resultado": []
        }
    }
    
    let usuarioString = JSON.stringify(usuario)
    localStorage.setItem("datosUsuario", usuarioString);
}

document.addEventListener("DOMContentLoaded", function () {
    const botonGuardar = document.querySelector("#enviarRegistro");
    const checkboxPopup = document.querySelector("#register-popup");
    let nombreInput = document.querySelector("#Nombre");
    let apellidoInput = document.querySelector("#Apellido"); 

    botonGuardar.addEventListener("click", function () {
        let nombre = nombreInput.value;
        let apellido = apellidoInput.value;

        checkboxPopup.checked = false;
        guardarNombre(nombre,apellido)
    });
});







