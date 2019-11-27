function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //CREAMOS UNA VARIABLE RESULTADO Y LE METEMOS LAS OPERACIONES
    var resultado = "";
    var espacios = ' &nbsp; ';   //solo era un puñetero espacio por asterisco :,\
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
    if (filas % 2 == 1){
        filas += 1;
    }
    filas /= 2; //al ser un rombo, el programa multiplica por 2 las filas (arriba y abajo)
    for(var i=1; i<=filas; i++){
            for(var k=1; k<=filas-i; k++){
                resultado += espacios;
            }
            for(var l=1; l<=(i*2-1); l++){
                if(l == 1 || l == i*2-1){
                    resultado += asterisco;
                }else{
                    resultado += espacios;
                }        
            }       
        resultado += '<br/>';
    }
    for(var i=filas-1; i>=1; i--){
            for(var k=1; k<=filas-i; k++){
                resultado += espacios;
            }
            for(var l=1; l<=(i*2-1); l++){
                if(l == 1 || l == i*2-1){
                    resultado += asterisco;
                }else{
                    resultado += espacios;
                }        
            }       
        resultado += '<br/>';
    }
    
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = resultado;
}