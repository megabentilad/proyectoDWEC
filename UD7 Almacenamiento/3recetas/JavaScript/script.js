$(function (){
    console.log("1");
    //mostrarRecetas();
    $.get("recetas.xml", {}, function (xml) { //abro el archivo xml
        $('receta', xml).each(function (i, element) { //recorro los contactos
            $('#select').append("<option value='" + $(element).attr("n") + "'>" + $(element).children(0).text() + "</option>");
        });
    });
    
    function mostrarReceta(){
        $.get("recetas.xml",{},function(xml){ //abro el archivo xml
            $('receta',xml).each(function(i, element){ //recorro los contactos
                if($(element).attr('n') == $('#select').val()){
                    $('ingredientes').children().each(function(l, ingrediente){
                        $('#listaIngredientes').append("<li>" + $(ingrediente).attr('cantidad') + $(ingrediente).attr('unidad') + " de " + $(ingrediente).text() + "</li>");
                    });
                    $('proceso').children().each(function(p, paso){
                        $('#listaProceso').append("<li>" + $(paso).attr('paso') + ".-  " + $(paso).text() + "</li>");
                    });
                    $('#ingredientes').css('visibility','visible');
                    $('#proceso').css('visibility','visible');
                }else{
                    $('#ingredientes').css('visibility','hidden');
                    $('#proceso').css('visibility','hidden');
                }
            }); 
        });
    }
    $('#select').on('change', mostrarReceta);
    

    //ejercicio
    $.get("recetas.json", {}, function (json) { //abro el archivo json
        for(nReceta in json["recetas"]["receta"]){
            $('#selectJSON').append("<option value='" + json["recetas"]["receta"][nReceta]["-n"] + "'>" + json["recetas"]["receta"][nReceta]["nombre"] + "</option>");
        }
    });
    
    function mostrarRecetaJSON(){
        if($('#listaIngredientesJSON').text().length > 2){
            $('#listaIngredientesJSON').empty();
        }
        if($('#listaProcesoJSON').text().length > 2){
            $('#listaProcesoJSON').empty();
        }
        $.get("recetas.json", {}, function (json) { //abro el archivo json
            for(nReceta in json["recetas"]["receta"]){
                if(json["recetas"]["receta"][nReceta]["-n"] == $('#selectJSON').val()){
                    console.log(json["recetas"]["receta"][nReceta]["ingredientes"]["ingrediente"][0]["-cantidad"]);
                    console.log(json["recetas"]["receta"][nReceta]["ingredientes"]["ingrediente"]);
                    for(nIngrediente in json["recetas"]["receta"][nReceta]["ingredientes"]["ingrediente"]){
                        $('#listaIngredientesJSON').append("<li>" + json["recetas"]["receta"][nReceta]["ingredientes"]["ingrediente"][nIngrediente]["-cantidad"] + json["recetas"]["receta"][nReceta]["ingredientes"]["ingrediente"][nIngrediente]["-unidad"] + " de " + json["recetas"]["receta"][nReceta]["ingredientes"]["ingrediente"][nIngrediente]["#text"] + "</li>");
                    }
                    for(nPaso in json["recetas"]["receta"][nReceta]["proceso"]["paso"]){
                        $('#listaProcesoJSON').append("<li>" + json["recetas"]["receta"][nReceta]["proceso"]["paso"][nPaso]["-numero"] + ".- " + json["recetas"]["receta"][nReceta]["proceso"]["paso"][nPaso]["#text"] + "</li>");
                    }
                    $('#ingredientesJSON').css('visibility','visible');
                    $('#procesoJSON').css('visibility','visible');
                }
            }
        });
    }
    $('#selectJSON').on('change', mostrarRecetaJSON);
});