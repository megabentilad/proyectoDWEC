//DEVUELVE UN NUMERO ALEATORIO DEFINIDO POR ESOS PARÁMETROS. SI NO METES DECIMALES, DEVUELVE UN ENTERO
function random(min, max, dec){
    if(arguments.length === 2){
        if(Number.isInteger(min) && Number.isInteger(max)){
            var numero = parseInt(Math.random() * (max -min) + min);
            return numero;
        }else{
            return null;
        }
    }else{
        if(arguments.length === 3){
            if(Number.isInteger(min) && Number.isInteger(max) && Number.isInteger(dec)){
            var numero = Math.random() * (max -min) + min;
            return numero.toFixed(dec);
        }else{
            return null;
        }
        }else{
            return null;
        }
    }
}

//VALIDA LA ENTRADA POR TECLADO DE UN PROMPT
function validaEntradaNumero(num, min, max){
    if(arguments.length === 1){
        var bien;
        do{
            bien=true;
            if(isNaN(num)){
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un número");
                num =prompt('Introduce un numero');
            }
        }while(bien === false);
        return num;
    }else{
        if(arguments.length === 3){
            var bien;
            do{
                bien=true; 
                if(isNaN(num)){
                    bien = false;
                    alert("El dato introducido no es válido. Debe introducir un número");
                }else{
                    if(num > max || num < min){
                        bien = false;
                        alert("Debe introducir un número entre " + min + " y " + max + ".");
                        num = prompt('Introduce un numero');
                    }
                }
            }while(bien === false);
            return num;
        }
        else{
            return null;
        }
    }
}

//AHORRA 15 LETRAS AL CODEAR
function getId(id){
    if(arguments.length === 1){
        return document.getElementById(id);
    }else{
        return null;
    }
}

//LO MISMO QUE LA DE ARRIBA
function escribeParrafo(id, cadena){
    if(arguments.length === 2){
        return id.innerHTML = cadena;
    }else{
        return null;
    }
}