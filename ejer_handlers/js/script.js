const results = document.querySelector(".respuestas");
const ejemplo = document.querySelector("#boton2");
function mibtn(){
    const btn1 = document.createElement('h1')
    btn1.innerText = 'haz hecho clic en un  inline handlers'
    document.body.append(btn1);
}
ejemplo.addEventListener('click', function(){
    alert("haz hecho clic en un handlers en JavaScript");
});

function mostrarMensaje() {
    alert("¡Estás pasando el ratón sobre el elemento!");
  }