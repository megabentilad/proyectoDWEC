function empezarFuncion() {
        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //PROCESO 
    var bien;
    var email = /.+@.+\..+/g;
    var entrada = "";
    do {
        bien = true;
        entrada = prompt("Introduzca un email");
        if (!email.test(entrada)){
            bien = false;
            alert("El email no es válido");
        }else{
            alert("Es valido UuU");
        }
    } while (bien === false);
    
        //MOSTRAR EL dni EN LA PANTALLA
    resultadoH.innerHTML = "El email " + entrada + " es válido.";
}