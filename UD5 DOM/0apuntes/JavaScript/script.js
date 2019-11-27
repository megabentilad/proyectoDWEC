var miVentana;

function abrir1(){
    miVentana = open('ventana2.html',' Ventana2', '');
}
function abrir2(){
    miVentana = open('ventana3.html',' Ventana3', '');
}
function enviarMensaje(){
    miVentana.postMessage('Soy un mensaje','*');
}
function recibirReceta(){
    document.getElementsByTagName("ul")[0].innerHTML += event.data + event.source.name;
    console.log(event.source);
}

function leerIframe(){
    var iframe1 = document.getElementById("iframe1");
    console.log(iframe1.contentWindow.document);
    iframe1.contentWindow.document.body.style.color = "red";
}


function colorinchis(){
    intervaloDiscoteca = setInterval(function(){
        document.getElementsByTagName("h1")[0].style.color = "rgb(" + parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + ")";
    },100); //milisegundos
    discotecaNO.style.visibility = "visible";
}
function colorinchisNO(){
    clearInterval(intervaloDiscoteca);
    discotecaNO.style.visibility = "hidden";
}

function saludar(){
    setTimeout(function(){
        alert("buenas~");
    },3021); //milisegundos
}

function cargar(){
    var Babrir1 = document.getElementById("Babrir1");
    var Babrir2 = document.getElementById("Babrir2");
    var Benviar = document.getElementById("Benviar");
    var iframeLeer = document.getElementById("iframeLeer");
    
    Babrir1.addEventListener('click',abrir1,false);
    Babrir2.addEventListener('click',abrir2,false);
    Benviar.addEventListener('click',enviarMensaje,false);
    window.addEventListener('message',recibirReceta,false);
    iframeLeer.addEventListener('click',leerIframe,false);
    
    
    var hola = document.getElementById("hola");
    hola.addEventListener('click', saludar, false);
    var discoteca = document.getElementById("discoteca");
    discoteca.addEventListener('click', colorinchis, false);
    discotecaNO = document.getElementById("discotecaNO");
    discotecaNO.addEventListener('click', colorinchisNO, false);
}

window.addEventListener('load',cargar,false);
