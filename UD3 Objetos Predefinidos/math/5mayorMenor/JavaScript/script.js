function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var numeros = [];
    var bien;
    for(var i = 0; i < 10; i++){
        do{
            bien=true; 
            numeros[i] = prompt('Introduce el número ' + (i + 1));
            numeros[i] = parseFloat(numeros[i]);
            if(isNaN(numeros[i])){
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un numero.");
            }
        }while(bien === false);
    }      
    
        //CREAMOS UNA VARIABLE RESULTADO Y COMPARAMOS LOS NÚMEROS
    var resultado = "Números: ";
   /* resultado += numeros.map(function (item){ //sirve para modificar uniformemente los elementos de un array
                console.log(item);
        if(item === Math.max(numeros) || item === Math.min(numeros)){
             return "<mark>" + item + "</mark>";   
        }else{
            return item;
        }
    }); */
    
    var mayor = Math.max(numeros[0],numeros[1],numeros[2],numeros[3],numeros[4],numeros[5],numeros[6],numeros[7],numeros[8],numeros[9])
    var pos = numeros.indexOf(mayor);
    numeros[pos] = "<mark>" + numeros[pos] + "</mark>";
    
    var menor = Math.min(numeros[0],numeros[1],numeros[2],numeros[3],numeros[4],numeros[5],numeros[6],numeros[7],numeros[8],numeros[9])
    pos = numeros.indexOf(menor);
    numeros[pos] = "<mark>" + numeros[pos] + "</mark>";
   

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = resultado + "<br>El mayor es: " + mayor + " y el menor: " + menor;
}
