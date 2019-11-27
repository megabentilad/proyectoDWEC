function empezarFuncion(){
    var campoAlfabetico = document.getElementById("campoAlfabetico");
    var errorCampoAlfabetico = document.getElementById("errorCampoAlfabetico");
    
    var campoAlfabeticoOpcional = document.getElementById("campoAlfabeticoOpcional")
    var errorCampoAlfabeticoOpcional = document.getElementById("errorCampoAlfabeticoOpcional");;
    
    var campoAlfanumerico = document.getElementById("campoAlfanumerico");
    var errorCampoAlfanumerico = document.getElementById("errorCampoAlfanumerico");
    
    var campoAlfanumericoOpcional = document.getElementById("campoAlfanumericoOpcional");
    var errorCampoAlfanumericoOpcional = document.getElementById("errorCampoAlfanumericoOpcional");

}
function validar(){
    var errores = 0;
    
    
    if(validarAlfabetico(campoAlfabetico.value, 1) !== null){
        errorCampoAlfabetico.style.display = "block";
        errorCampoAlfabetico.textContent = validarAlfabetico(campoAlfabetico.value, 1);
        errores++;
    }else{
        errorCampoAlfabetico.style.display = "none";
    }
    
    if(validarAlfabetico(campoAlfabeticoOpcional.value) !== null){
        errorCampoAlfabeticoOpcional.style.display = "block";
        errorCampoAlfabeticoOpcional.textContent = validarAlfabetico(campoAlfabeticoOpcional.value);
        errores++;
    }else{
        errorCampoAlfabeticoOpcional.style.display = "none";
    }
    
    
    
    if(validarAlfanumerico(campoAlfanumerico.value, 1) !== null){
        errorCampoAlfanumerico.style.display = "block";
        errorCampoAlfanumerico.textContent = validarAlfanumerico(campoAlfanumerico.value, 1);
        errores++;
    }else{
        errorCampoAlfanumerico.style.display = "none";
    }
    
    if(validarAlfanumerico(campoAlfanumericoOpcional.value) !== null){
        errorCampoAlfanumericoOpcional.style.display = "block";
        errorCampoAlfanumericoOpcional.textContent = validarAlfanumerico(campoAlfanumericoOpcional.value);
        errores++;
    }else{
        errorCampoAlfanumericoOpcional.style.display = "none";
    }
    
    if(errores === 0){
        return true;
    } 
    return false;
}