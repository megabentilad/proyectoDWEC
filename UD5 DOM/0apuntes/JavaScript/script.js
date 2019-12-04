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
    
    //Trabajar con nodos
    console.log(document.getElementsByName("textoChiquito"));
    console.log(document.getElementsByTagName("input"));
    console.log(document.getElementsByClassName("clasexto"));
    console.log(document.querySelectorAll(".clasexto"));
    
    console.log(document.getElementById("texto").nodeName);
    console.log(document.getElementById("texto").nodeType)
    console.log(document.getElementById("texto").attributes.name);
    console.log(document.getElementById("texto").attributes.name.nodeValue);
    console.log(document.getElementById("texto").attributes.name.nodeType);
    console.log(document.getElementsByTagName("p")[0].firstChild);
    console.log(document.getElementsByTagName("p")[0].firstChild.nodeType);
    
    console.log(document.getElementById("texto").nodeName.parentNode);
    console.log(document.getElementById("texto").attributes.name.parentNode);
    console.log(document.getElementsByTagName("p")[0].firstChild.parentNode);
    
    console.log(document.getElementById("texto").nodeName.childNodes);
    console.log(document.getElementById("texto").attributes.name.childNodes);
    console.log(document.getElementsByTagName("p")[0].firstChild.childNodes);
    
    
    //Trabajar con elementos
     var li = document.createElement("li");
     var liTexto = document.createTextNode('anvorguesa');
     li.appendChild(liTexto);
     var  ul = document.getElementsByTagName('ul')[0];
     ul.appendChild(li);
     
     var li = document.createElement("li");
     var liTexto = document.createTextNode('bocata');
     li.appendChild(liTexto);
     var  li1 = document.getElementsByTagName('li')[0];
     ul.insertBefore(li,li1);
     
        //clonar
    var clonado = liTexto.cloneNode(true);
    var ul2 = document.getElementsByTagName("ul")[1];
    ul2.appendChild(clonado);
    
        //borrar
   // ul2.removeChild(clonado);
    
    
}

window.addEventListener('load',cargar,false);
