function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var precio = parseInt(Math.random() * (1000 - 1) + 1);
    precio /= 100;
    
    var bien = true;
    do{
        bien=true;
        var introducido = prompt("El precio es " + precio + "€. ¿Cuanto quieres pagar?");
        
        introducido=parseInt(introducido*100);
        introducido /= 100;
        if(isNaN(introducido) || introducido < precio){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número mayor al precio.");
        }
    }while(bien == false);
    
    var vuelta = parseInt((introducido - precio)*100);
    vuelta /= 100;
    
        //CAlCULAR DIAS, HORAS, MINUTOS Y SEGUNDOS
    var doscientos = parseInt(vuelta / 2);   
    var cien = parseInt(vuelta % 2);  
    var cincuenta = parseInt(vuelta % 2 / 0.5);  
    var veinte = parseInt(vuelta % 2 % 0.5 / 0.2);   
    var diez = parseInt(vuelta % 2 % 0.5 % 0.2 / 0.1);
    var cinco = parseInt(vuelta % 2 % 0.5 % 0.2 % 0.1 / 0.05);
    var dos = parseInt(vuelta % 2 % 0.5 % 0.2 % 0.1 % 0.05 / 0.02);
    var uno = parseInt(vuelta % 2 % 0.5 % 0.2 % 0.1 % 0.05 % 0.02);
    
    //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Has introducido " + introducido + "€. <br/> El precio es: " + precio + "€. <br/>La vuelta es: " + vuelta + '€';
    resultadoH.innerHTML = "2€: " + doscientos + " monedas <br/>" + "1€: " + cien + " monedas <br/>" + "50cts: " + cincuenta + " monedas <br/>" + "20cts: " + veinte + " monedas <br/>" + "10cts: " + diez + " monedas <br/>" + "5cts: " + cinco + " monedas <br/>" + "2cts: " + dos + " monedas <br/>" + "1cts: " + uno + " monedas <br/>"; 
}