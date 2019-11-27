function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");    
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"    validación bla bla bla :/
    var bien = true;
    do{
        bien=true;
        var introducido1 = prompt("Introduzca el sueldo del trabajador");
        introducido1=parseInt(introducido1);
        if(isNaN(introducido1) && introducido1 > 0){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número superior a 0.");
        }
    }while(bien == false);
    
    do{
        bien=true;
        var introducido2 = prompt("Introduzca la antigüedad del trabajador en años");
        introducido2=parseInt(introducido2);
        if(isNaN(introducido2) && introducido2 > 0){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número superior a 0.");
        }
    }while(bien == false);

    
        //CREAMOS UNA VARIABLE RESULTADO Y LE METEMOS LAS OPERACIONES
    var resultado = "";
    
    if (introducido1 < 500){
        if(introducido2 < 10){
            resultado = 'El salario de este trabajador se duplica, dejándolo en: ' + (introducido1 * 2) + '€';
        }else{
            resultado = 'El salario de este trabajador se triplica, dejándolo en: ' + (introducido1 * 3) + '€';
        }
    }else{
        resultado = 'El salario de este trabajador no sufre cambios, dejándolo en ' + introducido1 + '€';
    }
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = 'El trabajador tiene un sueldo de ' + introducido1 + '€ y una antigüedad de ' + introducido2 + ' años.';
    resultadoH.innerHTML = resultado;
}
