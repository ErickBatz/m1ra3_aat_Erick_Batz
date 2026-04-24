const btnObtenerSueldoLiquido = document.querySelector("#btnObtenerSueldoLiquido");
const totalGanado = document.querySelector("#totalGanado");
const totalDeducciones = document.querySelector("#totalDeducciones");
const totalSueldoLiquido = document.querySelector("#totalSueldoLiquido");
const sueldo = document.querySelector("#sueldo");
const bonificaciones = document.querySelector("#bonificaciones");
const comisiones = document.querySelector("#comisiones");
const ahorro = document.querySelector("#ahorro");
const igss = document.querySelector("#igss");
const prestamos = document.querySelector("#prestamos");

let totalSueldo = 0;
let totalDescuentos = 0;



//Creamos las Funciones
function obtenerIngresos() {
    totalSueldo = Number(sueldo.value) + Number(bonificaciones.value) + Number(comisiones.value);
    console.log(totalSueldo);
    totalGanado.innerHTML = "<p>" + totalSueldo + "</p>";
}

function obtenerEgresos() {
    let valorigss = sueldo.value * 0.0483;
    document.querySelector("#igss").value = valorigss;
    totalDescuentos = Number(ahorro.value) + valorigss + Number(prestamos.value);
    console.log(totalDescuentos);
    totalDeducciones.innerHTML = "<p>" + totalDescuentos + "</p>";
}
function obtenerSueldoLiquido() {
    totalSueldoLiq = totalSueldo - totalDescuentos;
    console.log(totalSueldoLiq);
    totalSueldoLiquido.innerHTML = "<p>" + totalSueldoLiq + "</p>";
}



//creamos el evento de click del boton obtener sueldo liquido
btnObtenerSueldoLiquido.addEventListener("click", obtenerIngresos);
btnObtenerSueldoLiquido.addEventListener("click", obtenerEgresos);
btnObtenerSueldoLiquido.addEventListener("click", obtenerSueldoLiquido);


