//Ejercicios con ventanas
var otraVentana;
function recibirModificacion(){
    document.getElementsByTagName("ul")[0].innerHTML += event.data + event.source.name;
    console.log(event.source);
}
function cambiarLetras(){
    otraVentana = open('ventana.html','_blank', 'width=300px height=300px');
    setTimeout(function(){
        otraVentana.postMessage('letras','*');
    },3021); //milisegundos
    
}
function cambiarFondo(){
    otraVentana = open('ventana.html','_blank', 'width=300px height=300px');
    otraVentana.postMessage('fondo','*');
}

function cargar(){
    var botonLetras = document.getElementById("letras");
    botonLetras.addEventListener('click', cambiarLetras, false);
    var botonFondo = document.getElementById("fondo");
    botonFondo.addEventListener('click', cambiarFondo, false);
}

window.addEventListener('load',cargar,false);
