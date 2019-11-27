function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var resultadoH = document.getElementById("resultado");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"    validación bla bla bla :/
    var bien = true;
    var digitos;
    do{
        bien=true;
        var introducido1 = prompt("Introduzca el número");
        digitos = introducido1.length;
        introducido1=parseInt(introducido1);
        if(isNaN(introducido1)){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número.");
        }
    }while(bien == false);
    digitos = parseInt(digitos); 
    
        //CREAMOS VARIABLES PARA LAS CENTENAS; DECENAS Y UNIDADES
    /*    tres dígitos
    var centenas = parseInt(introducido1 / 100);
    var decenas = parseInt(introducido1 % 100 / 10);
    var unidades = parseInt(introducido1 % 100 % 10);
    var operacion = Math.pow(centenas,digitos) + Math.pow(decenas,digitos) + Math.pow(unidades,digitos);
    */
    var operacion = 0;
    switch(digitos){
        case 8:
            operacion += Math.pow(parseInt(introducido1 / 10000000),digitos);
        case 7:
            operacion += Math.pow(parseInt(introducido1 % 10000000 / 1000000),digitos);
            
        case 6:
            operacion += Math.pow(parseInt(introducido1 % 10000000 % 1000000 / 100000),digitos);
        case 5:
            operacion += Math.pow(parseInt(introducido1 % 10000000 % 1000000 % 100000 / 10000),digitos);
        case 4:
            operacion += Math.pow(parseInt(introducido1 % 10000000 % 1000000 % 100000 % 10000 / 1000),digitos);
        case 3:
            operacion += Math.pow(parseInt(introducido1 % 10000000 % 1000000 % 100000 % 10000 % 1000 / 100),digitos);
        case 2:
            operacion += Math.pow(parseInt(introducido1 % 10000000 % 1000000 % 100000 % 10000 % 1000 % 100 / 10),digitos);           
        case 1:
            operacion += Math.pow(parseInt(introducido1 % 10000000 % 1000000 % 100000 % 10000 % 1000 % 100 % 10),digitos); 
    }
        //CREAMOS UNA VARIABLE RESULTADO Y LE METEMOS LAS OPERACIONES
    var resultado = "";
    
    if (introducido1 == operacion){
        resultado = 'Este número es Amstrong';
    }else{
        resultado = 'Este número no es Amstrong. El resultado de hacer la operación es: ' + operacion;
    }
    
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "¿Es el número: " + introducido1 + " un número Amstrong?";
    resultadoH.innerHTML = resultado;
}


//llendo más allá, con un array