function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DE LOS NÚMEROS Y TRANSFORMACIÓN DE LOS MISMOS A "number"
    var bien;
    for(var i = 1; i <= 3; i++){
        do{
            bien=true; 
            window["numero" + i] = 0;
            window["numero" + i] = prompt('Introduce el numero ' + i);
            tamano = parseInt(window["numero" + i]);
            if(isNaN(window["numero" + i])){
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un numero");
            }
        }while(bien === false);
    }
    
    
        //CREAMOS UNA VARIABLE RESULTADO E INTRODUCIDO Y REALIZAMOS LAS OPERACIONES
    var resultado1;
    var resultado2;
    var introducido = "";
    
    introducido += "OPERACIÓN: " + numero1 + "x" + "2".sup() + " + " + numero2 + "x + " + numero3 + " = 0";
    
    resultado1= ((-numero2) + Math.sqrt(Math.pow(numero2, 2) - 4 * numero1 * numero3)) / 2 * numero1;
    resultado2= ((-numero2) - Math.sqrt(Math.pow(numero2, 2) - 4 * numero1 * numero3)) / 2 * numero1;
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = introducido;
    resultadoH.innerHTML = "Resultado 1: x = " + resultado1 + "<br>Resultado 2: x = " + resultado2;
}
