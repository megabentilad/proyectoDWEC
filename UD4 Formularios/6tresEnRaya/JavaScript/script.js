function empezarFuncion(){
    
    //ESCOGER COLORES---------------------------------------------------
    
    porDefecto = document.getElementById("porDefecto").value;
    ultimoMarcado = document.getElementById("ultimoMarcado").value;
    proximo = document.getElementById("proximo").value;
    desseleccion = document.getElementById("desseleccion").value;
    victoria = document.getElementById("victoria").value;
    
        document.getElementById("porDefecto").onchange = function(){porDefecto = this.value;for(var i = 0; i <=8; i++){if(casillas[i] === ultimo || casillas[i].innerHTML === "-"){}casillas[i].style.color = porDefecto;}};
        document.getElementById("ultimoMarcado").onchange = function(){ultimoMarcado = this.value};
        document.getElementById("proximo").onchange = function(){proximo = this.value};
        document.getElementById("desseleccion").onchange = function(){desseleccion = this.value};
        document.getElementById("victoria").onchange = function(){victoria = this.value};
        
        
    casillas = document.getElementsByTagName("td");
    ultimo = null;

    for(var i = 0; i <=8; i++){
        casillas[i].addEventListener('mouseenter',hover,false);
        casillas[i].addEventListener('mouseleave',salir,false);
        casillas[i].addEventListener('click',marcar,false);
        casillas[i].addEventListener('dblclick',retroceder,false);
        casillas[i].style.color = porDefecto;
        casillas[i].onselectstart = returnfalse; //estetico
    }
    contador=1;
    retrocedido = false; //estetico
}

function hover(){
    if(this === ultimo){
        this.style.color = desseleccion;
    }else{
        this.style.color = proximo;
    }
    if(contador%2 === 0){
        this.innerHTML = 'O';
    }else{
        this.innerHTML = 'X';

    }
}

function salir(){
    this.style.color = porDefecto;
    this.innerHTML = '-';
}

function marcar(){
    if(this !== ultimo && ultimo !== null && !retrocedido){
        ultimo.style.cursor = 'default';
        ultimo.style.color = porDefecto;
    }
    this.removeEventListener('mouseleave',salir,false);
    this.removeEventListener('mouseenter',hover,false);
    this.removeEventListener('click',marcar,false);
    this.style.color = ultimoMarcado;
    this.style.cursor = 'help';
    contador++;
    ultimo = this;
    retrocedido = false;
    
    var ganado = false;
    var ganador = "";
    if (contador > 5) {
        if(casillas[0].innerHTML === casillas[1].innerHTML && casillas[1].innerHTML === casillas[2].innerHTML && (casillas[0].innerHTML === "X" || casillas[0].innerHTML === "O")){ //Primera fila
            ganado = true;
            casillas[0].style.color = victoria;
            casillas[1].style.color = victoria;
            casillas[2].style.color = victoria;
        }
        if(!ganado && casillas[3].innerHTML === casillas[4].innerHTML && casillas[4].innerHTML === casillas[5].innerHTML && (casillas[3].innerHTML === "X" || casillas[3].innerHTML === "O")){ //Segunda fila
            ganado = true;
            casillas[3].style.color = victoria;
            casillas[4].style.color = victoria;
            casillas[5].style.color = victoria;
        }
        if(!ganado && casillas[6].innerHTML === casillas[7].innerHTML && casillas[7].innerHTML === casillas[8].innerHTML && (casillas[6].innerHTML === "X" || casillas[6].innerHTML === "O")){ //Tercera fila
            ganado = true;
            casillas[6].style.color = victoria;
            casillas[7].style.color = victoria;
            casillas[8].style.color = victoria;
        }
        
        if(!ganado && casillas[0].innerHTML === casillas[3].innerHTML && casillas[3].innerHTML === casillas[6].innerHTML && (casillas[0].innerHTML === "X" || casillas[0].innerHTML === "O")){ //Primera columna
            ganado = true;
            casillas[0].style.color = victoria;
            casillas[3].style.color = victoria;
            casillas[6].style.color = victoria;
        }
        if(!ganado && casillas[1].innerHTML === casillas[4].innerHTML && casillas[4].innerHTML === casillas[7].innerHTML && (casillas[1].innerHTML === "X" || casillas[1].innerHTML === "O")){ //Segunda columna
            ganado = true;
            casillas[1].style.color = victoria;
            casillas[4].style.color = victoria;
            casillas[7].style.color = victoria;
        }
        if(!ganado && casillas[2].innerHTML === casillas[5].innerHTML && casillas[5].innerHTML === casillas[8].innerHTML && (casillas[2].innerHTML === "X" || casillas[2].innerHTML === "O")){ //Tercera columna
            ganado = true;
            casillas[2].style.color = victoria;
            casillas[5].style.color = victoria;
            casillas[8].style.color = victoria;
        }
        
        if(!ganado && casillas[0].innerHTML === casillas[4].innerHTML && casillas[4].innerHTML === casillas[8].innerHTML && (casillas[0].innerHTML === "X" || casillas[0].innerHTML === "O")){ //Primera diagonal
            ganado = true;
            casillas[0].style.color = victoria;
            casillas[4].style.color = victoria;
            casillas[8].style.color = victoria;
        }
        if(!ganado && casillas[2].innerHTML === casillas[4].innerHTML && casillas[4].innerHTML === casillas[6].innerHTML && (casillas[2].innerHTML === "X" || casillas[2].innerHTML === "O")){ //Segunda diagonal
            ganado = true;
            casillas[2].style.color = victoria;
            casillas[4].style.color = victoria;
            casillas[6].style.color = victoria;
        }
        
        
        if(ganado){  //muestra el mensaje y reinicia el juego si así lo deseas
            if(contador%2 === 0){
                ganador = "X";
            }else{
                ganador = "O";
            }
            alert("El jugador " + ganador + " ha ganado!!");
            if(confirm("¿Quieres volver a empezar?")){
                for(var i = 0; i <=8; i++){
                    casillas[i].addEventListener('mouseenter',hover,false);
                    casillas[i].addEventListener('mouseleave',salir,false);
                    casillas[i].addEventListener('click',marcar,false);
                    casillas[i].addEventListener('dblclick',retroceder,false);
                    casillas[i].style.color = porDefecto;
                    casillas[i].style.cursor = "pointer";
                    casillas[i].innerHTML = "-";
                    casillas[i].onselectstart = returnfalse; //estetico
                }
                ultimo = null;
            }else{ //Eliminar todos los eventos
                for(var i = 0; i <=8; i++){
                casillas[i].removeEventListener('mouseenter',hover,false);
                casillas[i].removeEventListener('mouseleave',salir,false);
                casillas[i].removeEventListener('click',marcar,false);
                casillas[i].removeEventListener('dblclick',retroceder,false);
                casillas[i].style.cursor = 'default';
                }
            } 
        }
        if(contador === 10 && !ganado){
            alert("Habeis empatado.");
            alert("Reiniciando...");
            //REINICIAR
            for(var i = 0; i <=8; i++){
                casillas[i].addEventListener('mouseenter',hover,false);
                casillas[i].addEventListener('mouseleave',salir,false);
                casillas[i].addEventListener('click',marcar,false);
                casillas[i].addEventListener('dblclick',retroceder,false);
                casillas[i].style.color = porDefecto;
                casillas[i].innerHTML = "-";
                casillas[i].onselectstart = returnfalse; //estetico
            }
        }
    }
}

function retroceder(){
    if(this === ultimo){
        this.addEventListener('mouseleave',salir,false);
        this.addEventListener('mouseenter',hover,false);
        this.addEventListener('click',marcar,false);
        this.style.cursor = "pointer";
        this.style.color = desseleccion;
        contador--;  
    }
    retrocedido = true;
    
    
}


//estetico
function returnfalse(){
    return false;
}