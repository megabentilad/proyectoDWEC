function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var hexaH = document.getElementById("hexa");
    var octalH = document.getElementById("octal");

        //INTRODUCCIÓN DE NÚMEROS
    var numero1 = prompt("Introduzca un número en hexadecimal"); //MUY COMPLEJO DE VALIDAR POR AHORA
    var numero2 = prompt("Introduzca un número en octal");
    
        //TRANSFORMAR DE HEXADECIMAL Y OCTAL A DECIMAL
    var decimal1 = parseInt(numero1, 16);
    var decimal2 = parseInt(numero2, 8);
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    hexaH.innerHTML = "Número en hexdecimal: " + numero1 + "  |   En decimal: " + decimal1;
    octalH.innerHTML =  "Número en octal: " + numero2 + "  |   En decimal: " + decimal2;

}