function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //CREAMOS UNA VARIABLE RESULTADO Y LE METEMOS LAS OPERACIONES
    var resultado = "";
    var espacios = '&nbsp;&nbsp;';   //solo era un puñetero espacio por asterisco :,\
                  // Los espacios a los lados son necesarios
    var asterisco = '*';
    var bien;
    do{
        bien=true;        
        var filas = prompt('Introduce el número de filas');
        filas = parseInt(filas);
        if(isNaN(filas)){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número.");
        }
    }while(bien == false);
    for(var i=1; i<=filas; i++){

            for(var k=1; k<=filas-i; k++){
                resultado += espacios;
            }
            for(var l=1; l<=(i*2-1); l++){
                resultado += asterisco;
            }       
        resultado += '<br/>';
    }
    
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = resultado;
}