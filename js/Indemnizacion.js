const bntCalcular = document.querySelector("#calcular");
const sueldoBase = document.querySelector("#sueldoBase");
const salarioPendiente = document.querySelector("#salarioPendiente");
const cobrosPendientes = document.querySelector("#cobrosPendientes");
const resultado = document.querySelector("#resultado");
const añosTrabajados = document.querySelector("#añosTrabajados");

//creamos la funcion para calcular la indemnizacion
function calcularIndemnizacion() {
    const sueldo = parseFloat(sueldoBase.value) || 0;
    const salario = parseFloat(salarioPendiente.value) || 0;
    const cobros = parseFloat(cobrosPendientes.value) || 0;
    let años = parseFloat(añosTrabajados.value) || 0;

    // Años completos y meses restantes
    let añosCompletos = Math.floor(años);
    let mesesRestantes = (años - añosCompletos) * 12;

    // Aguinaldo y Bono 14 proporcional (solo meses del último año)
    const bono14 = (sueldo / 12) * mesesRestantes;
    const aguinaldo = (sueldo / 12) * mesesRestantes;
     console.log(bono14);
    document.querySelector("#bono14").value = bono14.toFixed(2);
    document.querySelector("#aguinaldo").value = aguinaldo.toFixed(2);

    // Indemnización (1 sueldo por año trabajado)
    let indemnizacion = (sueldo * añosCompletos) + bono14 + aguinaldo + salario - cobros;

    resultado.innerHTML = `<p>Indemnización: Q${indemnizacion.toFixed(2)}</p>`;
}



//creamos eventos 
bntCalcular.addEventListener("click", calcularIndemnizacion);