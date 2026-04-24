const btnGuardar = document.querySelector('#btnGuardar');
const tablaEmpleados = document.querySelector('#tablaEmpleados');
const btnEliminarPrimero = document.querySelector('#btnEliminarPrimero');
const btnEliminarUltimo = document.querySelector('#btnEliminarUltimo');

function agregarEmpleado(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const fechaIngreso = document.querySelector('#fechaIngreso').value;
    const puesto = document.querySelector('#puesto').value;
    const salario = document.querySelector('#salario').value;
    let agregarFila = `
    <tr>
        <td>${nombre}</td>
        <td>${fechaIngreso}</td>
        <td>${puesto}</td>
        <td>Q.${salario}</td>
    </tr>
    `;
    tablaEmpleados.innerHTML += agregarFila;
}

function eliminarPrimero(e) {
    e.preventDefault();
    const filas = tablaEmpleados.querySelectorAll('tr');
    if (filas.length > 1) {
        filas[1].remove();
    }

}
function eliminarUltimo(e) {
    e.preventDefault();
    const filas = tablaEmpleados.querySelectorAll('tr')
    if (filas.length > 1) {
        filas[filas.length - 1].remove();
    }
}




btnGuardar.addEventListener('click', agregarEmpleado);
btnEliminarPrimero.addEventListener('click', eliminarPrimero);
btnEliminarUltimo.addEventListener('click', eliminarUltimo);