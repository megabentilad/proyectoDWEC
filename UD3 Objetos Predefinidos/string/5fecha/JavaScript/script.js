function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    
        //DESARROLLAMOS EL PROGRAMA
    var sFecha = "";
    var aFecha = [];
    var bien = false;
    do{
        sFecha = prompt("Introduzca la fecha con el formato 'dd/mm/aaaa' Ejemplo: '4/9/2002'");
        aFecha = sFecha.split("/");
        if(!isNaN(aFecha[0]) && !isNaN(aFecha[1]) && !isNaN(aFecha[2])){   //No compruebo los días máximos de cada mes
            aFecha[0] = parseInt(aFecha[0]);
            aFecha[1] = parseInt(aFecha[1]);
            aFecha[2] = parseInt(aFecha[2]);
            if(0<aFecha[0] && aFecha[0]<32 && 0<aFecha[1] && aFecha[1]<13){
                bien = true;
            }
        }
        if(!bien){
            alert("La fecha introducida no es válida. Recuerda usar '/' cómo separador.");
        }
    }while(!bien);
    
        //ESCRIBIR EL RESULTADO
    resultadoH.innerHTML = "Original: " + sFecha + "<br/>El día: " + aFecha[0] + "<br/>El mes: " + aFecha[1] + "<br/>El año: " + aFecha[2];
}
