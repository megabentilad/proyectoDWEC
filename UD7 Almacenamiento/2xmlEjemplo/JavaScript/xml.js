$(function (){
    $.get("archivo.xml",{},function(xml){ //abro el archivo xml
        $('contacto',xml).each(function(i, element){ //recorro los contactos
            var linea = "<tr>"; //comienzo la linea
            $(element).children().each(function(j, item){ //recorro cada valor de los contactos
                if($(item).text() !== $('telefonos', element).text()){ //si no es "telefonos", mete el valor en un td
                    linea += "<td>" + $(item).text() + "</td>"; //meto el valor en el td
                }
            });
            $('telefonos', element).children().each(function(k, tel){ //al ser telefono, lo recorre y va metiendo los teléfonos en td
                linea += "<td>" + $(tel).text() + "</td>"; //mete cada teléfono en un td
            });
            linea += "</tr>"; //cierra la linea
            $("table").append($(linea)); //mete la linea en la tabla
        });
    });
    
    
    $.get("archivo.xml",{},function(xml){ //abro el archivo xml
        $('contacto',xml).each(function(i, element){ //recorro los contactos
            var linea = "<tr>"; //comienzo la linea
            $(element).children().each(function(j, item){ //recorro cada valor de los contactos
                if($(item).children() == 0){ //si no es "telefonos", mete el valor en un td
                    linea += "<td>" + $(item).text() + "</td>"; //meto el valor en el td
                }
            });
            if($(element).children() === 0){
                $(element).children().each(function(k, tel){ //al ser telefono, lo recorre y va metiendo los teléfonos en td
                    linea += "<td>" + $(tel).text() + "</td>"; //mete cada teléfono en un td
                });
            }
            linea += "</tr>"; //cierra la linea
            $("table").append($(linea)); //mete la linea en la tabla
        });
    });
});