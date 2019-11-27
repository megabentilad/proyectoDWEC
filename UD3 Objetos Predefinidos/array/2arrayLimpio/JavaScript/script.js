function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var resultadoH = document.getElementById("resultado");
    var baseH = document.getElementById("base");
    
        //CREAMOS EL ARRAY BASE Y LE DAMOS PORMATO EN OTRA VARIABLE PARA CUANDO LO QUERAMOS MSOTRAR
    var base = [2,5,9,7,6,3,1,5,4,8,3,2,6,9,3,5,1,2,3];
    var baseTabla = base.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
    
        //ORDENAMOS EL ARRAY Y PREPARAMOS EL BUCLE
    base = base.sort();
    var anterior = base[0];
    var resultado = [];
    resultado.push(base[0]);
    
        //CREAMOS UN BUCLE PARA FILTRAR EL ARRAY Y NO COGER NÚMEROS REPETIDOS
    for(var i = 1; i < base.length; i++){ 
        if(anterior !== base[i]){
           resultado.push(base[i]);
        }
        anterior = base[i];
    }
    
    resultado = resultado.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });

        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    resultadoH.innerHTML = resultado;
    baseH.innerHTML = baseTabla;
}
