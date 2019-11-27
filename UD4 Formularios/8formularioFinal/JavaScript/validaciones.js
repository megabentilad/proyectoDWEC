function validarAlfabetico(texto, obligatorio = 0, min = 1, max = 255) {
    texto = texto.trim();
    var patron = /^[\D]+$/g;
    if (!obligatorio && texto === "") {
        return true;
    } else {
        if (!patron.test(texto)) {
            return false;
        } else {
            if (texto.length < min || texto.length > max) {
                return false;
            }
        }
    }
    return true;
}
function validarAlfanumerico(texto, obligatorio = 0, min = 1, max = 255) {
    texto = texto.trim();
    if (!obligatorio && texto === "") {
        return true;
    } else {
        if (texto.length < min || texto.length > max) {
            return false;
        }
    }
    return true;
}

function validarEntero(numero, obligatorio = 0, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER){
    numero = numero.trim();
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
    if(!obligatorio && numero === ""){
        return true;
    }else{
        numero = parseInt(numero);
        if(!numero.isNaN() && numero >= min && numero <= max){
            return true;
        }
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