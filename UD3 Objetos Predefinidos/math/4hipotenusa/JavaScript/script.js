function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var bien;
    for(var i = 1; i <= 2; i++){
        do{
            bien=true; 
            window["cateto" + i] = 0;
            window["cateto" + i] = prompt('Introduce el cateto ' + i);
            tamano = parseFloat(window["cateto" + i]);
            if(isNaN(window["cateto" + i]) || window["cateto" + i] < 0){
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un numero positivo");
            }
        }while(bien === false);
    }   
    
        //CREAMOS UNA VARIABLE RESULTADO Y COMPARAMOS LOS NÚMEROS
    var hipotenusa = (Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))).toFixed(2);

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Cateto 1: " + cateto1 + "<br/>Cateto 2 : " + cateto2;
    resultadoH.innerHTML = "Hipotenusa: " + hipotenusa;
}
