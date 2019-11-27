function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"    validación bla bla bla :/
    var bien = true;
    do{
        bien=true;
        var introducido1 = prompt("Introduzca el número");
        
        introducido1=parseInt(introducido1);
        if(isNaN(introducido1)){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número.");
        }
    }while(bien == false);
    
        //CREAMOS UNA VARIABLE RESULTADO Y LE METEMOS LAS OPERACIONES
    var resultado = "";
    for(var i=0; i<=10; i++){
        resultado = resultado + introducido1 + "*" + i + "=" + introducido1*i + '<br/>';
    }
    
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Esta es la tabla de multiplicar del: " + introducido1;
    resultadoH.innerHTML = resultado;
}
