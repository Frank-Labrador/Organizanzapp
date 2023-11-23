// Simulador de ahorros
let salario = 1200;
let arriendo = 600;
let seguroVehiculo = 100;

let comida = Number( prompt("ingrese monto de comida del mes"));
let luz = Number(prompt("Ingrese monto de luz del mes"))
let agua = Number (prompt("ingrese monto del agua del mes"));
let impuestos = Number(prompt("Impuestos agregados"));
let ahorro = salario - arriendo - comida - luz - agua - seguroVehiculo - impuestos;


if(salario > ahorro ) {
    console.log ("Pudiste ahorrar " + ahorro)
}
