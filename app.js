let numeroGenerado;//ambito de la variable o alcance golbal
let intentos = 1 - 1;
let numeroMaximo = 10;
let listaNumerosSorteados = []// arary (arreglos) y siempren inicia con la pocicion cero.
let listaGerencia = [];
let lenguagesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin','Python'];
let listaNumeros = ["1","3","5","9"];

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
        asignarTextoElemento("p",`la cantidad de intentos fue: ${intentos} ${intentos === 1 ? "vez":"veces"}`);

        /*.removeAttribute('disabled', 'true'), remueve un atributo de HTML y en este caso es disabled 
        al quitar el primer parametro se habilita el boton ya que quitamos la propiedad 'disabled' del boton*/
        document.getElementById("reiniciar").removeAttribute('disabled');

    }else{/*el usuario no hacerto*/
        
        if (numeroDeUsuario > numeroGenerado){
            asignarTextoElemento("p","tu numero es menor");

        }else{asignarTextoElemento("p","tu numero es mayor");}
        intentos++;
        console.log(`el numero de intentos es ${intentos}`);
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
    console.log(`el numero secreto es: ${numeroGenerado}`);
    //console.log(`lista de numeros es:${listaNumerosSorteados}`);

    
    /* length nos da la cantidad de objetos que hay en nuna lista,
    adicional podemos pedri algun elemento de la lista (variableLista[poner numero])*/
    //si el numero generado esta en la lista y este se compara con la variable numeroMaximo .
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numero");
    }else{
    console.log(listaNumerosSorteados);    
        //si el numero generado esta inluido esta en la lista hacemos una operacion si no segimos normal
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    /*limpiar la caja*/
    limpiarCaja();
    /*indicar mensajes de intervalos de numeros*/
    /*generar numero aleatorio*/
    /*indicar numero intentos*/
    condicionesIniciales();
    /*desabiliar boton*/
    /*.setAttribute('disabled','true'); esprara dos para metros, es colocar algo pero con este valor*/
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1 - 1;
    numeroGenerado = generarNumeroSecreto();
}
// el .push me sirve para empjar o meter un  objeto a una lista 
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang')


function mostrandoLiata(){
    console.log(lenguagesDeProgramacion[lenguagesDeProgramacion -1]);
}

function resultado(){
    let promedio = listaNumeros.length
}

condicionesIniciales();
mostrandoLiata();





/*esta parte me sirve para llamar un selector HTML.
establecer un puente entre ellos llados (DOM)
let titulo = document.querySelector("primero la etiqueta", "segunto el texto que va en la etiqueta");
podemos incluir un texto con este metodo.
titulo.innerHTML = "Juego del numero secreto"


Devuelve el primer elemento que encuentre que coincida con el grupo de selectores.
document.querySelector(SELECTOR).
let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un numero del 1 al 10";*/
