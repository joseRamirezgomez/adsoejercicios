const registerBtn = document.querySelector("#btn");
const nombre = document.querySelector("#nomb");
const email = document.querySelector("#email");
const cedula = document.querySelector("#cc");
const cel = document.querySelector("#celular");
const resp = document.querySelector(".result");
const container = document.querySelector(".ver");

registerBtn.addEventListener("click", function() {
  verific();
  container.style.display = "block";
});

function verific() {
  if (nombre.value.trim() === "" || email.value.trim() === "" || cedula.value.trim() === "" || cel.value.trim() === "") {
    resp.textContent = "Por favor, completa todos los campos";
    setTimeout(function() {
      resp.textContent = "";
    }, 3000);
  }else{
    baseD();
  }
}

function baseD() {
  const datos = [
    { id: "Nombre", tipo: "h3", contenido: nombre.value },
    { id: "Email", tipo: "h3", contenido: email.value },
    { id: "Cédula de ciudadania", tipo: "h3", contenido: cedula.value },
    { id: "Número celular", tipo: "h3", contenido: cel.value }
  ];

  datos.forEach(function(dato) {
    const nuevoElemento = document.createElement(dato.tipo);
    nuevoElemento.id = dato.id;
    nuevoElemento.textContent = `${dato.id}: ${dato.contenido}`;

    container.appendChild(nuevoElemento);
  });
}

