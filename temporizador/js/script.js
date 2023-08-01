
const fechaActual = new Date().toISOString().split('T')[0];
function calcul() {
    const fechaInput = document.getElementById('fechaInicio');
    const fechaSeleccionada = fechaInput.value; // Obtenemos la fecha en formato "YYYY-MM-DD"
    const fechaEnd = new Date(fechaSeleccionada); // Creamos un objeto Date con la fecha seleccionada

    console.log("Fecha seleccionada:", fechaSeleccionada);
    console.log("Fecha seleccionada como objeto Date:", fechaEnd);
}
