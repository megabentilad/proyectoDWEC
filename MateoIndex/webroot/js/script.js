$(function () {
    var comprobarGalletas = $.cookie("galletaphp");
    console.log(comprobarGalletas);
    console.log(null);
    if(comprobarGalletas == null){
        //Mensaje de cookies
        $("body").append("<div class='mensaje'><h1>Politica de galletas</h1><p>Esta página usa galletas para que puedas disfrutar de una funcionalidad to chachi. O las aceptas o no entras.<br/>(⁎˃ᆺ˂)</p><br/><button>Aceptar galletas</button></div>");
        $("body").append("<div class='fondoOscuro' style='width:100vw;height:100vh;background-color:black;opacity:50%;position:fixed;top:0px;left:0px;'></div>");
        $(".mensaje").css({"background-color": "black","color":"white","width": "20vw","height": "22vh", "z-index": "100","position": "absolute", "top": "40%", "left": "40%"});
        $(".mensaje > button").on("click",crearGalletas);
        
        //declaración de galletas
        function crearGalletas(){
            $.cookie("galletaphp", "0", {expires: 30});
            $.cookie("galletajavascript", "0", {expires: 30});
            $.cookie("galletadaw", "0", {expires: 30});
            $.cookie("galletadiw", "0", {expires: 30});
            
            //borrar mensaje
            $(".mensaje").remove();
            $(".fondoOscuro").remove();
        }
    }
    
    
    $(".php").on("click",sumarGalleta);
    $(".javascript").on("click",sumarGalleta);
    $(".daw").on("click",sumarGalleta);
    $(".diw").on("click",sumarGalleta);
    
    //Llamar a la función que coloca todo
    colocar();
    
    
    function sumarGalleta(){
        var nuevoValor = parseInt($.cookie("galleta"+$(this).attr("class")))+1;
        $.cookie("galleta"+$(this).attr("class"),nuevoValor, {expires: 30});
    }
    
    function ordenar(){
        //He copiao el algoritmo ese de ordenacion en burbuja :D
        listaNombres = ["galletaphp","galletajavascript","galletadaw","galletadiw"];
        lista = [parseInt($.cookie('galletaphp')),parseInt($.cookie('galletajavascript')),parseInt($.cookie('galletadaw')),parseInt($.cookie('galletadiw'))];
        var n, i, k, aux, auxNombres;
        n = lista.length;

        // Algoritmo de burbuja
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (lista[i] > lista[i + 1]) {
                    //array de valores
                    aux = lista[i];
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                    //array de nombres
                    auxNombres = listaNombres[i];
                    listaNombres[i] = listaNombres[i + 1];
                    listaNombres[i + 1] = auxNombres;
                }
            }
        }


    }
    
    function colocar(){
        //llamo a ordenar y utilizo los arrays ordenados
        ordenar();
//        $("." + listaNombres[3].split("galleta")[1]).append($(".enlaces"));
//        $("." + listaNombres[2].split("galleta")[1]).append($("." + listaNombres[3].split("galleta")[1]));
//        $("." + listaNombres[1].split("galleta")[1]).append($("." + listaNombres[2].split("galleta")[1]));
//        $("." + listaNombres[0].split("galleta")[1]).append($("." + listaNombres[1].split("galleta")[1]));
//    
        $(".enlaces").append($("." + listaNombres[3].split("galleta")[1]));
        $(".enlaces").append($("." + listaNombres[2].split("galleta")[1]));
        $(".enlaces").append($("." + listaNombres[1].split("galleta")[1]));
        $(".enlaces").append($("." + listaNombres[0].split("galleta")[1]));
    }
});

