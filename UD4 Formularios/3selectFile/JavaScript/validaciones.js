function validarAlfabetico(texto){
    texto = texto.trim();
    var patron = /^[\D]+$/g;
    if(patron.test(texto) && texto !== ""){
        return true;
    }
    return false;
}

function validarDni(dni) {
    var formato = /^[\d]{8}[A-Z]$/g;
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var numero = 0;
    dni = dni.trim();
    if(formato.test(dni) && dni !== ""){
        numero = parseInt(dni.substring(0, 8));
        if(letras.substr(numero % 23, 1) === dni.substr(8)) {
            return true;
        }
    }
    return false;
}

function validarEmail(email) {
    var formato = /.+@.+\..+/g;
    email = email.trim();

    if(formato.test(email) && email !== ""){
        return true;
    }
    return false;
}
