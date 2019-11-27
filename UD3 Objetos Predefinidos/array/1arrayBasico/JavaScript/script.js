function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var bien;
    do{
        bien=true;        
        var tamano = prompt('Introduce el tamaño del arrays');
        tamano = parseInt(tamano);
        if(isNaN(tamano) || tamano<1){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un no menor de 1.");
        }
    }while(bien === false);
    
        //CREAMOS UNA VARIABLE RESULTADO Y COMPARAMOS LOS NÚMEROS
    var resultado = [];
    var repeticiones = 0;
    do{
        var cifra = prompt('Introduce una cifra para el array');
        resultado[repeticiones] = "<td>" + cifra + "</td>";
        repeticiones++;
    }while(tamano !== repeticiones);

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = resultado;
}
