function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var baseH = document.getElementById("base");
    var modificadoH = document.getElementById("modificado");
    var posicionesH = document.getElementById("posiciones");
    
        //CREAMOS EL ARRAY BASE Y LE DAMOS PORMATO EN OTRA VARIABLE PARA CUANDO LO QUERAMOS MSOTRAR
    var base = [2,5,9,7,6,3,1,5,4,8,3,2,6,9,3,5,1,2,3];
    var baseTabla = base.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
    
        //CREAMOS LAS VARIABLES DE LOS RESULTADOS Y LE AÑADIMOS LOS RESULTADOS A MEDIDA QUE RECORREMOS EL BUCLE BASE    
    var posiciones = [];
    var baseModificado = base;
    base.forEach(function (item, index){  //For Each porque nod evolvemos nada
        if(item === 3){
            posiciones.push(index);
            baseModificado[index] = "<mark>" + index + "</mark>";
        };
    });
    
    var baseModificado = baseModificado.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    baseH.innerHTML = baseTabla;
    posicionesH.innerHTML = "Las posiciones de los 3 son: " + posiciones;
    modificadoH.innerHTML = baseModificado;
}
