function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    
        //CREAMOS LAS VARIABLES QUE CONTIENEN LOS RESULTADOS
    var numero1 = "Primer número: ";
    var numero2 = "Segundo número: ";
    var numeros = [];
    var aux = 0;
    
    for(var i = 0; i <6; i++){
        aux = parseInt(Math.random() * (51 - 1) + 1);
        if(numeros.indexOf(aux) == -1){
            numeros.push(aux);
            numero1 += " " + aux;
        }else{
            i--;
        }
    }
    numero2 += parseInt(Math.random() * (10 - 1) + 1);
    
    

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = numero1 + "<br/>" + numero2;
}
