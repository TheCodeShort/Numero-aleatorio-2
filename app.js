let numeroGenerado = 1;//ambito de la variable o alcance golbal
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10;
let listaGerencia = [];
let lenguagesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin','Python']
let listaNumeros = ["1","3","5","9"];

console.log(`el numero secreto es: ${numeroGenerado}`);

/*en los parentecis van los parametros la funcion quedo para que reciba cualquier parametro*/
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;//aca no retorna nada, pero es buna practica .
}

function verificarIntento(){
    //parseInd (), nos ayuda a convertir un texto en un numero.
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(`el numero del usuario es: ${numeroDeUsuario}`);
    
    if (numeroDeUsuario === numeroGenerado){
        asignarTextoElemento("p",`bien echo el numero secreto que es: ${numeroGenerado} 
        y la cantidad de intentos es: ${intentos} ${intentos === 1 ? "vez":"veces"}`);

        /*.removeAttribute('disabled', 'true'), remueve un atributo de HTML y en este caso es disabled 
        al quitar el primer parametro se habilita el boton y el segundo parametro le dice al primero que es valido*/
        document.getElementById("reiniciar").removeAttribute('disabled', 'true');
    }else{/*el usuario no hacerto*/
        
        if (numeroDeUsuario > numeroGenerado){
            asignarTextoElemento("p","tu numero es menor");

        }else{asignarTextoElemento("p","tu numero es mayor");}
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja (){
    /*el querySelector sabe que lo que estamos llamando es un id por el (#)
    .value toma el valor que se encuentra en #valorUsuario y lo convierte 
    en nada por las comillas vacias*/
    document.querySelector('#valorUsuario').value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(`numero secreto es: ${numeroGenerado}`);
    //console.log(`lista de numeros es:${listaNumerosSorteados}`);

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

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(`tus intentos:${intentos}`);
}

lenguagesDeProgramacion.push('Java', 'Ruby','GoLang')


function mostrandoLiata(){
    console.log(lenguagesDeProgramacion);
}

function resultado(){
    let promedio = listaNumeros.length
}

asignarTextoElemento("h1", "juego del numero secreo!");
asignarTextoElemento("p", "indica un numero del 1 aal 10");
generarNumeroSecreto();
verificarIntento();



/*esta parte me sirve para llamar un selector HTML.
establecer un puente entre ellos*/
//let titulo = document.querySelector("h1");
//podemos incluir un texto con este metodo.
//titulo.innerHTML = "Juego del numero secreto"


//Devuelve el primer elemento que encuentre que coincida con el grupo de selectores.
//document.querySelector(SELECTOR).
/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";*/
