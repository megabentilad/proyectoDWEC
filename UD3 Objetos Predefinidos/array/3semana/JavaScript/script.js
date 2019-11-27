function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var semanaH = document.getElementById("semana");
    var laboralesH = document.getElementById("laborales");
    var festivosH = document.getElementById("festivos");
    
        //CREAMOS EL ARRAY BASE Y LE DAMOS PORMATO EN OTRA VARIABLE PARA CUANDO LO QUERAMOS MSOTRAR
    var semana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
    var semanaTabla = semana.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
    
        //DIVIDIMOS EL ARRAY EN OTROS DOS Y LES DAMOS FORMATO
    var laborales = semana.slice(0,5);
    var festivos = semana.slice(5);
    
    var laborales = laborales.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
    
    var festivos = festivos.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    semanaH.innerHTML = semanaTabla;
    laboralesH.innerHTML = laborales;
    festivosH.innerHTML = festivos;
}
