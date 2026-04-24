const bntCalcular = document.querySelector("#calcular");
const sueldoBase = document.querySelector("#sueldoBase");
const salarioPendiente = document.querySelector("#salarioPendiente");
const cobrosPendientes = document.querySelector("#cobrosPendientes");
const resultado = document.querySelector("#resultado");
const añosTrabajados = document.querySelector("#añosTrabajados");

//creamos la funcion para calcular la indemnizacion
function calcularIndemnizacion() {
    const sueldo = parseFloat(sueldoBase.value);
    const salario = parseFloat(salarioPendiente.value);
    const cobros = parseFloat(cobrosPendientes.value);
    let años = parseFloat(añosTrabajados.value);
    let añosCumplidos = años * 12;
    console.log(añosCumplidos);
    let bono14 = sueldo / añosCumplidos * añosCumplidos;
    let aguinaldo = sueldo / añosCumplidos * añosCumplidos;

    document.querySelector("#bono14").value = bono14;
    document.querySelector("#aguinaldo").value = aguinaldo;



    let indemnizacion = (sueldo * añosCumplidos) + bono14 + aguinaldo + salario - cobros;
    resultado.innerHTML = `<p>Indemnizacion: ${indemnizacion}</p>`;
}



//creamos eventos 
bntCalcular.addEventListener("click", calcularIndemnizacion);