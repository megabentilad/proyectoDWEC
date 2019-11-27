function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var diasH = document.getElementById("dias");
    var horasH = document.getElementById("horas");
    var minutosH = document.getElementById("minutos");
    var segundosH = document.getElementById("segundos");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var introducido;
    do{
        bien=true;        
        introducido = prompt("Introduzca los segundos");
        introducido = parseInt(introducido);
        if(isNaN(introducido) || introducido < 0){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número mayor que 0 y no debe sobrepasar el 100.");
        } 
    }while(bien === false);       
    
        //CAlCULAR DIAS, HORAS, MINUTOS Y SEGUNDOS
    var dias = introducido/86400;    //86400 son los segundos que hay en un día
    var horas = introducido%86400/3600;   //3600 son los segundos que hay en una hora
    var minutos = introducido%86400%3600/60;  //60 son los segundos que hay en un minuto
    var segundos = introducido%86400%3600%60;   
    
    //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Has introducido " + introducido + " segundos.";
    diasH.innerHTML = "Dias: " + parseInt(dias);
    horasH.innerHTML =  "Horas: " + parseInt(horas);
    minutosH.innerHTML =  "Minutos: " + parseInt(minutos);
    segundosH.innerHTML =  "Segundos: " + parseInt(segundos);

}