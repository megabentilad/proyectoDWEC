function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var bien = true;
    do{
        bien=true;
        var introducido1 = prompt("Introduzca la edad del primero");
        var introducido2 = prompt("Introduzca la edad del segundo");
        
        introducido1=parseInt(introducido1);
        introducido2=parseInt(introducido2);
        if(isNaN(introducido1) || isNaN(introducido2)){
            bien = false;
            alert("Los datos introducidos no son válidos. Deben introducirse números.");
        }
    }while(bien == false);
    
        //CREAMOS UNA VARIABLE RESULTADO Y COMPARAMOS LAS EDADES
    var resultado;
    if(introducido1-introducido2 < 0){
        resultado = "El segundo hermano es mayor que el primero"; 
    }else{ 
        if(introducido1 - introducido2 > 0){
            resultado = "El primer hermano es mayor que el segundo"; 
        }else{
            resultado = "Los hermanos tienen la misma edad"; 
        }
    }
    
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "La edad del primer hermano es: " + introducido1 + " y la del segundo es: " + introducido2;
    resultadoH.innerHTML = resultado;
}
