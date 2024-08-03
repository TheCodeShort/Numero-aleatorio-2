/*esta parte me sirve para llamar un selector HTML.
establecer un puente entre ellos*/
//let titulo = document.querySelector("h1");
//podemos incluir un texto con este metodo.
//titulo.innerHTML = "Juego del numero secreto"


//Devuelve el primer elemento que encuentre que coincida con el grupo de selectores.
//document.querySelector(SELECTOR).
/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10;
let listaGerencia = [];
let lenguagesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin','Python']
let listaNumeros = ["1","3","5","9"];
console.log(numeroSecreto);



/*en los parentecis van los parametros.
la funcion quedo para que reciba cualquier parametro*/

function asignarTextoElemento(selector, texto){
    let elementoHTEML = document.querySelector(selector);
    elementoHTEML.innerHTML = texto;
    return;//aca no retorna nada, pero es buna practica .
}

/* llamando una funcion*/
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`acerto el numero secreto que es:${numeroSecreto} y la cantidad de intentos es ${intentos} ${intentos === 1 ? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute('disabled', 'true');
    }else{
        /*el usuario no hacerto*/
        
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","tu numero es menor");

        }else{asignarTextoElemento("p","tu numero es mayor");}
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros,
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numero");
    }
    //si el numero generado esta inluido esta en la lista hacemos una operacion si no segimos normal
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;}
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(`tus intentos:${intentos}`);
}


function reiniciarJuego() {
    /*limpiar la caja*/
    limpiarCaja();
    /*indicar mensajes de intervalos de numeros*/
    /*generar numero aleatorio*/
    /*indicar numero intentos*/
    condicionesIniciales();
    /*desabiliar boton*/
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang')


function mostrandoLiata(){
    console.log(lenguagesDeProgramacion);
}
mostrandoLiata();

function resultado(){
    let promedio = listaNumeros.length
}