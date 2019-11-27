function empezarFuncion() {
        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //PROCESO 
    var bien;
    var dni = /^[0-9]{8}[A-Z]$/g;
    var entrada = "";
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var numero = 0;
    do {
        bien = true;
        entrada = prompt("Introduzca un dni");
        entrada = entrada.trim();
        if (dni.test(entrada)){
            numero = parseInt(entrada.substring(0, 8));
           console.log(numero);
            if(letras.substr(numero % 23, 1) === entrada.substr(8)){
                alert("Es valido UuU");
            }
            else{
                alert("La letra no es correcta");
                bien = false;
            }
        }else{
            bien = false;
            alert("El dni no es válido");
        }
    } while (bien === false);
    
        //MOSTRAR EL dni EN LA PANTALLA
    resultadoH.innerHTML = "El DNI " + entrada + " es válido.";
}

        
