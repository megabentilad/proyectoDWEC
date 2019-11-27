function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"    validación bla bla bla :/
    var bien = true;
    do{
        bien=true;
        var introducido1 = prompt("Introduzca el año");
        introducido1=parseInt(introducido1);
        if(isNaN(introducido1)){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número.");
        }
    }while(bien == false);

    
        //CREAMOS UNA VARIABLE RESULTADO Y LE METEMOS LAS OPERACIONES
    var resultado = "";
    var bisiesto = false;
    
    if (introducido1 % 4 == 0){
        bisiesto = true;
        if(introducido1 % 100 == 0){
            if(introducido1 % 400 != 0){
                bisiesto = false;
            }
        }
    }
    if(bisiesto){
        resultado = 'El año ' + introducido1 + ' es bisiesto';
    }else{
        resultado = 'El año ' + introducido1 + ' no es bisiesto';
    }
    
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = resultado;
}
