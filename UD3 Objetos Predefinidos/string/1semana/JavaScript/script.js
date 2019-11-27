function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    
        //DESARROLLAMOS EL PROGRAMA
    var semana = new Array('lunes','martes','miércoles','jueves','viernes','sábado','domingo');
    var semanaMayus = semana.map(function(dia){
        return dia.toUpperCase(); //Lo pongo en mayúsculas
    });
    
        //ESCRIBIR EL RESULTADO
    resultadoH.innerHTML = semanaMayus;
}
