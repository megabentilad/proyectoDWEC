function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var precioH = document.getElementById("precio");
    var descuentoH = document.getElementById("descuento");
    var precioFinalH = document.getElementById("precioFinal");

        //INTRODUCCIÓN DE NÚMEROS Y CONVERSIÓN DE LOS MISMOS DE CADENA A NÚMERO
    var numero1;
    var numero2;
    do{
        bien=true;        
        numero1 = prompt("Introduzca un precio");
        numero1 = parseInt(numero1);
        if(isNaN(numero1) || numero1 < 0){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número mayor que 0.");
        } 
    }while(bien === false);     
    do{
        bien=true;        
        numero2 = prompt("Introduzca el descuento");
        numero2 = parseInt(numero2);
        if(isNaN(numero2) || numero2 < 0 || numero2 > 100){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número mayor que 0 y no debe sobrepasar el 100.");
        } 
    }while(bien === false);       
    
        //CÁLCULO DEL PRECIO CON EL DESCUENTO APLICADO
    var precioFinal = numero1 - numero1 * (numero2/100);
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    precioH.innerHTML = "Precio inicial: " + numero1 + "€";
    descuentoH.innerHTML =  "Descuento: " + numero2 + "%";
    precioFinalH.innerHTML = "Precio final: " + precioFinal + "€";

}