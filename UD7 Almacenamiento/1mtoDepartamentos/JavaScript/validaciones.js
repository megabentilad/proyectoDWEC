function validarAlfabetico(texto, obligatorio = 0, min = 1, max = 255){
    texto = texto.trim();
    var mensajeError = null;
    var patron = /^[\D]+$/g;
    if(!obligatorio && texto === ""){
        return mensajeError;
    }else{
        mensajeError = comprobarNoVacio(texto);
        if(mensajeError === null){
            if(!patron.test(texto)){
            mensajeError = "Solo se permiten letras.";
            }else{
                if(texto.length < min || texto.length > max){
                    mensajeError = "Debe contener al menos" + min + " letras y no pasar de " + max + " letras.";
                }
            }
        }  
    }
    return mensajeError;
}
function validarAlfanumerico(texto, obligatorio = 0, min = 1, max = 255){
    texto = texto.trim();
    var mensajeError = null;
    if(!obligatorio && texto === ""){
        return mensajeError;
    }else{
        mensajeError = comprobarNoVacio(texto);
        if(mensajeError === null){
            if(texto.length < min || texto.length > max){
                mensajeError = "Debe contener al menos" + min + " carácteres y no pasar de " + max + " carácteres.";
            }
        }
        
    }
    return mensajeError;
}

function validarEntero(numero, obligatorio = 0, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
    numero = numero.trim();
    var mensajeError = null;
    if(!obligatorio && numero === ""){
        return true;
    }else{
        numero = parseInt(numero);
        if(numero.isInteger() && numero >= min && numero <= max){
            return true;
        }
    }
    return false;
}

function validarDecimal(numero, obligatorio = 0, min = Number.MIN_VALUE, max = Number.MAX_VALUE){
    numero = numero.trim();
    var mensajeError = null;
    if(!obligatorio && numero === ""){
        return mensajeError;
    }else{
        numero = parseFloat(numero);
        if(numero.isNaN() || numero < min || numero > max){
            mensajeError = "El valor debe ser un número entre el " + min + " y el " + max;
        }
    }
    return mensajeError;
}

function validarDni(dni) {
    var mensajeError = null;
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
    var mensajeError = null;
    var formato = /.+@.+\..+/g;
    email = email.trim();

    if(formato.test(email) && email !== ""){
        return true;
    }
    return false;
}

function comprobarNoVacio(cadena) {
    var mensajeError = null;
    cadena = cadena.trim();
    if(cadena === ""){
        mensajeError = " Campo vacío.";
    }
    return mensajeError;
}
