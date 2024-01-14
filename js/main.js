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
        console.log("hubo ahorro");
        resultadoInput.value = ahorroTotal;

    } else {
        console.log("no hubo ahorro");
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
            "nombre": "Juan",
            "apellido": "Perez",
            "resultado": [resultadoAhorro]
        }
    }

    console.log(usuario);
    let usuarioString = JSON.stringify(usuario)
    localStorage.setItem("datosUsuario", usuarioString);
}






