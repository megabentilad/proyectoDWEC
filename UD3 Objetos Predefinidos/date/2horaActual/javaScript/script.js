function empezarFuncion(){
        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var salidaH = document.getElementById("valores");
    
        //DECLARAR HORA Y OPERAR
    var hora = new Date();
    var diferencia = 0;
    diferencia = hora.getUTCHours() - hora.getHours();
    if(diferencia < 0){
        diferencia *= -1;
    }
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    salidaH.innerHTML = "La hora en España es: " + hora.toLocaleTimeString() + "<br/> La diferencia con UTC es de: " + diferencia + " horas.";
}
