function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    
        //DESARROLLAMOS EL PROGRAMA
        var frase = "";
    do{
        frase = prompt("Escriba una frase");
        frase = frase.trim(); //Quitamos los espacios del principio y del final
    }while(frase === "");
    
    var encriptada = frase.replace(/a/g, "@"); //El /a/ dice que cambie las "a" y la g dice que coja todas las "a"
    encriptada = encriptada.replace(/e/g, "3");
    encriptada = encriptada.replace(/o/g, "0");
    
        //ESCRIBIR EL RESULTADO
    resultadoH.innerHTML = "Original: " + frase + "<br/>Encriptada: " + encriptada;
}
