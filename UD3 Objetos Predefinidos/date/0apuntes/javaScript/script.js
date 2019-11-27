function empezarFuncion(){
  //CONSTRUCTOR
    var fecha = new Date();
    console.log(fecha);
    
   //FECHA ORIGEN
    var fecha0 = new Date(0);
    console.log(fecha0);
   
   //FECHA ORIGEN + 1 AÑO
    var fecha1 = new Date(365*24*60*60*1000);
    console.log(fecha1);
    
   //MI CUMPLEAÑOS
    var fecha2 = new Date(2000,05,20,18,23,41); //Los meses son arrays y empiezan por 0............ :,D
    console.log(fecha2);
    fecha2 = new Date("Jun 20,2000 18:21:49");
    console.log(fecha2);
    
  //MODIFICACIONES
   //CAMBIO DE FECHAS
    fecha2.setDate(3);
    console.log(fecha2);
    
    /*
     * .setDate(); Día
     * .setMonth(); Mes
     * .setHours(); Horas
     * .setSeconds(); Segundos
     * .setTime(); TimeStamp
     */
    
  //OBTENER VALORES
        fecha = new Date();
        console.log(fecha.getTime());
        
        /*
         * .getTime(); TimeStamp
         * .getDate(); Número del día
         * .getDay(); Día de la semana
         */
   
       //PARSE
       var num = Date.parse("10-10-2002 12:51:23");
       console.log(num);
       
   //MOSTRAR
    /*
     * .toDateString();
     * .toLocaleDateString();
     * Derivados
     */
   
   
   
    var opciones ={weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    console.log(fecha.toLocaleString("es-ES", opciones));
}
