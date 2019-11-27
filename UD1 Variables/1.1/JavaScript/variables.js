function empezarFuncion(){
    /*
      var numero1 = document.getElementById("numero1");
    do{
        var numero;
        numero = prompt("Introduzca un número");                    SE INTENTÓ, DE CORAZÓN
        numero*=1;
    }while (typeof (numero) !== "number");
    numero1+numero;
    numero1.innerHTML;
*/

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var numeroPrimero = document.getElementById("numero1");
    var numeroSegundo = document.getElementById("numero2");
    var sumaH = document.getElementById("suma");
    var restaH = document.getElementById("resta");
    var multiplicacionH = document.getElementById("multiplicacion");
    var divisionH = document.getElementById("division");

        //INTRODUCCIÓN DE NÚMEROS Y CONVERSIÓN DE LOS MISMOS DE CADENA A NÚMERO
    var numero1;
    var numero2;
    do{
        bien=true;        
        numero1 = prompt("Introduzca un número");
        numero1 = parseInt(numero1);
        if(isNaN(numero1)){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número.");
        } 
    }while(bien === false);       
    do{
        bien=true;        
        numero2 = prompt("Introduzca otro número");
        numero2 = parseInt(numero2);
        if(isNaN(numero2)){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número.");
        } 
    }while(bien === false);       
    
        //OPERACIONES
    suma = numero1 + numero2;
    resta = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division = numero1 / numero2;
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    numeroPrimero.innerHTML = "Primer número: " + numero1;
    numeroSegundo.innerHTML =  "Segundo número: " + numero2;
    sumaH.innerHTML = "Suma: " + suma;
    restaH.innerHTML = "Resta: " + resta;
    multiplicacionH.innerHTML = "Multiplicación: " + multiplicacion;
    divisionH.innerHTML = "División: " + division;
}