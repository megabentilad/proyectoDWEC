function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");

        //ESCRIBIR EL RESULTADO
    resultadoH.innerHTML = "Cocina para todos".bold().fontcolor("green").fixed().fontsize(10).italics() + "<br/>La cocina tu alcance".bold().fontcolor("green").fixed().fontsize(5) + "<br/>Descubre los platos más exquisitos, fáciles y económicos que puedas imaginar.".fontcolor("red").fontsize(10) + "2".fontcolor("red").fontsize(10).sup() + "Esto es un " + "texto".bold() + " con " + "negrita".bold() + "<br>Esto es un texto tachado y esto es un enlace a telepizza -> ".strike() + "pizzería".strike().link("https://www.telepizza.es/");
}
