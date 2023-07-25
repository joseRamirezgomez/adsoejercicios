function saludo(nombre = 'invi'){
    return function(){
        return 'hola ' + nombre
    }
}

console.log(saludo('marcos')())
//objetos
const  persona = {
    nombre: "karol",
    edad: 19,
    saludar: function() {
        console.log('hola ')
        
    },
    amigos: ['Sergio', 'Paula'],
    enviarMail(){
        return 'enviando correo'
    }
}
console.log(persona.nombre)
console .log(persona.edad)
console.log(persona.amigos)
persona.saludar()
console.log(persona.enviarMail())
//shorthand property names
//peropiedades abreviadas
const names = "Arcico";
const edad = 20;

const person ={
    names,
    edad,
    salut(){
        console.log(names + ' ' + edad)
    }
}
console.log(person.names)
console.log(person.edad)
person.salut();
// ejercicio 2 shorthand property names

const product = 'laptop ASUS M16';
const precio = 'USD $5000';


const newProduct = {
    product,
    precio
}

console.log(newProduct)
//DOM Document Object Model

const titulo = document.createElement('h1')
titulo.innerText = "Titulo 1"
document.body.append(titulo)

const btn = document.createElement('button')
btn.innerText = "boton1"
document.body.append(btn)
cont = 0;
//event handlets - manejadores de eventos
btn.addEventListener('click', function(){
    cont = cont + 1;
    titulo.innerText = "haz presionado el boton"
});

//destructuring - destructuracion

const user = {
    nombre: 'oscar',
    edad: 23

}
function infoUser(user){
    const {nombre, edad} = user
    return '<h1> Hola, ' + nombre + '</h1>'
}
document.body.innerHTML = infoUser(user)

//funciones anónimas
const suma = function(a, b){
    return  a+b
    // ejecuta una funcion
}
console.log(suma(2, 3));

const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(numero){
    console.log(numero);
})
const btn2 = document.createElement('button')
btn2.innerText = 'presioname'
document.body.append(btn2)
function presion(){
    alert('uyyyyyy me presionaste !')
}
btn2.addEventListener('click', presion)