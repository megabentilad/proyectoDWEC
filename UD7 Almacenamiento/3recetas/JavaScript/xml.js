$(function (){
    function mostrarRecetas(){
        $.get("recetas.xml",{},function(xml){ //abro el archivo xml
            $('receta',xml).each(function(i, element){ //recorro los contactos
                $('#select').append("<option value='" + $(element).attr("n") + "'>" + $("nombre",element).text() + "</option>");
            }); 
        });
    }

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
});