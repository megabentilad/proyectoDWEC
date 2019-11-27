function empezarFuncion(){
    var bSoloUnaVez = document.getElementById("soloUnaVez");
    var valorDelBoton = bSoloUnaVez.value;
    bSoloUnaVez.onclick = function(){soloUnaVez(valorDelBoton, bSoloUnaVez);}; //Para que no se llame automáticamente, no poner paréntesis [soloUnaVez(valorDelBoton)]. Para eso usar funciones anonimas
    
    var botonAvanzado = document.getElementById("eventoAvanzado");
    botonAvanzado.addEventListener('click',llamada,false);
    a = function (){llamada2(botonAvanzado);}; //para poder hacer que el removeEvent de llamada2() pueda funcionar. a debe ser una variable global.
    botonAvanzado.addEventListener('click',a,false);
    
    var botones = document.getElementsByTagName("button");
    for(var i=0; i<botones.length; i++){
        botones[i].addEventListener('click',quienSoy,false);
    }
    
    
    
    var burbujas =document.getElementById("ñuuuu");  //Para ver propagaciónb de eventos
    burbujas.addEventListener('click',holiwi,false)
    //burbujas.attachEvent()  ya ciene con el event.stopPropagation()
    
    //Ratón
    var div = document.getElementById("div1");
    div.addEventListener('dblclick',raton1,false);
    
    var div2 = document.getElementById("div2");
    div2.oncontextmenu = function() {
        alert("clickiti click");
    };
    
    var div3 = document.getElementById("div3");
    div3.addEventListener('mousedown',raton3,false);
    div3.addEventListener('mouseup',resetearRaton3,false);
    div3.addEventListener('mouseleave',resetearRaton3,false);
    
    var div4 = document.getElementById("div4");
    div4.addEventListener('mousedown',coordenadas,false);
    div4.addEventListener('mouseup',resetearRaton4,false);
    div4.onselectstart= returnfalse;  //estetico. para que no se seleccione el contenido
    
    //Teclado
    document.addEventListener('keypress',pulsado,false);
    
    div.addEventListener('copy', copiar, false);
    div.addEventListener('paste', pegar, false);
}

function pulsame(){
    alert("ahhhh, me pulsaste wey");
}

function soloUnaVez(valor, bSoloUnaVez){
    alert("Has pulsado en '" + valor + "'. Ya no voy a volver a salir");
    bSoloUnaVez.onclick = null;
}

function llamada(){
    alert("No parezco muy avazado");
}

function llamada2(boton, a){
    boton.value = "Oh vaya. ¿Qué pasó?";
    boton.removeEventListener('click',llamada,false);
    boton.removeEventListener('click',a,false);  //al ser a una variable global, existe y por tanto se puede usar
}

function quienSoy(){
    alert("Soy el boton " + this.textContent);
}

//Ratón

function raton1(){
    alert("Funcioné UuU");
}

function raton3(){
    this.innerHTML = "Me presionas con fiereza";
}

function resetearRaton3(){
    this.innerHTML = "Manten pulsado";
}

function coordenadas(){
    this.addEventListener('mousemove',coordenadasMostrar,false);
}

function resetearRaton4(){
    this.removeEventListener('mousemove',coordenadasMostrar,false);
    this.innerHTML = "X:<br/>Y:";
}

function coordenadasMostrar(){
    this.innerHTML = "X: " + event.clientX + "<br/>Y: " + event.clientY;
    this.style.cursor = 'default';
}



function holiwi(){
    alert("hiiiiiii");
    event.stopPropagation();   //Ya no me propago
}


function pulsado(){
    if(event.code === "Space" && event.ctrlKey){
        alert("Pulsate Ctrl + espacio");
    }else{
        alert("has pulsado " + event.key + " cuyo codigo es " + event.code + " que corresponde a este número " + event.keyCode);
    }
}

function copiar(){
    alert("Copiar está feo");
}

function pegar(){
    alert("No puedes modificarme...");
}

function returnfalse(){ //util para cosas estéticas
    return false;
}