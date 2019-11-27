function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    
        //DESARROLLAMOS EL PROGRAMA
        var frase = "";
    do{
        frase = prompt("Escriba una frase");
        frase = frase.trim(); //Quitamos los espacios del principio y del final
    }while(frase === "");
    
    var encriptada = frase.replace(/a/g, ""); //El /a/ dice que cambie las "a" y la g dice que coja todas las "a"
    encriptada = encriptada.replace(/e/g, "");
    encriptada = encriptada.replace(/i/g, "");
    encriptada = encriptada.replace(/o/g, "");
    encriptada = encriptada.replace(/u/g, "");
    
    encriptada = encriptada.replace(/á/g, ""); //
    encriptada = encriptada.replace(/é/g, "");
    encriptada = encriptada.replace(/í/g, "");
    encriptada = encriptada.replace(/ó/g, "");
    encriptada = encriptada.replace(/ú/g, "");
    
        //ESCRIBIR EL RESULTADO
    resultadoH.innerHTML = "Original: " + frase + "<br/>Sin vocales: " + encriptada;
}
