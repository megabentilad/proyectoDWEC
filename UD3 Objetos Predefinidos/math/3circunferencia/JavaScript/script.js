function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
     var bien;
     var radio;
     do{
            bien=true; 
            radio = prompt('Introduce el radio ');
            radio = parseFloat(radio);
            if(isNaN(radio) || radio <0){
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un numero positivo");
            }
        }while(bien === false);
    
        //CREAMOS UNA VARIABLE RESULTADO Y COMPARAMOS LOS NÚMEROS
    var resultado = "Diámetro: ";
    resultado += radio*2; 
    resultado += "<br/> área: ";
    resultado += (Math.PI * Math.pow(radio, 2)).toFixed(2);
    

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Radio: " + radio;
    resultadoH.innerHTML = resultado;
}
