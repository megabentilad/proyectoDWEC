function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    
        //DESARROLLAMOS EL PROGRAMA
        var frase = "";
    do{
        frase = prompt("Escriba una frase");
        frase = frase.trim(); //Quitamos los espacios del principio y del final
    }while(frase === "");
    
    var aFrase = frase.split(" "); //partimos la frase en palabras
    var palabras = aFrase.length;
    
        //ESCRIBIR EL RESULTADO
    resultadoH.innerHTML = '"' + frase + '" tiene ' + palabras + " palabras.";
}
