//Ejercicios con ventanas
var otraVentana;
function cambiar(){
    otraVentana = open('ventana.html','_blank', 'width=300px height=300px');
    cambio = this.id;  
}

function cargado(){
    if(event.data !== "cargado"){
        if(cambio === "fondo"){
        document.body.style.backgroundColor = event.data;
        }else{       
            document.body.style.color = event.data;
        }
    }
    
}
function cargar(){
    var botonLetras = document.getElementById("letras");
    botonLetras.addEventListener('click', cambiar, false);
    var botonFondo = document.getElementById("fondo");
    botonFondo.addEventListener('click', cambiar, false);
    window.addEventListener('message',cargado,false);
}

window.addEventListener('load',cargar,false);
