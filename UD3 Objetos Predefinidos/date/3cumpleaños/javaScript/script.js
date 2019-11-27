function empezarFuncion(){
        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var salidaH = document.getElementById("salida");
    
        //PEDIR FECHA Y COMPROBAR SU VALIDEZ
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
    
        //UNA VEZ VALIDADA LA FECHA, TRABAJAMOS CON ELLA
    var introducido= new Date(aFecha[2], aFecha[1]-1, aFecha[0]);
    var salida = introducido;
    var aux = new Date();
    salida = aux - salida;
     
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Naciste el: " + introducido.toLocaleDateString(); //Hace cosas raras con los años because Date Object
    salidaH.innerHTML = "Has vivido: " + parseInt(salida/1000/3600/24/365) + " años, " + parseInt(salida/1000/3600/24%365/30.41666666666667) + " meses y " + parseInt(salida/1000/3600/24%365%30.41666666666667) + " días.";
}
