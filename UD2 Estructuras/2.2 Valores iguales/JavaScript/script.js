function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
        var bien;
    do{
        bien= true;
        var introducido1 = prompt("Introduzca el primer número");
        var introducido2 = prompt("Introduzca el segundo número");
        var introducido3 = prompt("Introduzca el tercer número");

        introducido1=parseInt(introducido1);
        introducido2=parseInt(introducido2);
        introducido3=parseInt(introducido3);
        if(isNaN(introducido1) || isNaN(introducido2) || isNaN(introducido3)){
            bien = false;
            alert("Los datos introducidos no son válidos. Deben introducirse números.");
        }
    }while(bien == false);
    
        //CREAMOS UNA VARIABLE RESULTADO Y COMPARAMOS LOS NÚMEROS
    var resultado;
    if(introducido1 == introducido2 || introducido1 == introducido3 || introducido2 == introducido3){
            resultado = "Dos números son iguales"; 
        if(introducido1 == introducido2 && introducido2 == introducido3){
            resultado = "Tres números son iguales"; 
        } 
    }else{ 
        resultado = "Los tres números son distintos";
    }

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "El primer número es: " + introducido1 + " el segundo es: " + introducido2 + " y el tercero es: " + introducido3;
    resultadoH.innerHTML = resultado;
}
