function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var matriz1H = document.getElementById("matriz1");
    var matriz2H = document.getElementById("matriz2");
    var resultadoH = document.getElementById("resultado");

        //Creaci��n de variables
    var matriz1 = [];
    var matriz2 = [];
    var fila = [];
    var multiplicacion = 0;
    var matriz1S = "";
    var matriz2S = "";
    var resultado = "";
        
        //Bucle generador de las matrices de forma aleatoria
    for(var i = 0; i < 3; i++){ //columnas
        matriz1S += "<tr>";
        for(var j = 0; j < 3; j++){ //filas
            fila[j] = parseInt(Math.random() * (10 - 0));
            matriz1S += "<td>" + fila[j] + "</td>";
        }
        window["filaA" + i] = [];
        fila.forEach(function (item, posicion){ 
            window["filaA" + i][posicion] = item;
        });
        matriz1[i] = window["filaA" + i];
        matriz1S += "</tr>";
    }
     for(var i = 0; i < 3; i++){ //columnas
         matriz2S += "<tr>";
        for(var j = 0; j < 3; j++){ //filas
            fila[j] = parseInt(Math.random() * (10 - 0));
            matriz2S += "<td>" + fila[j] + "</td>";
        } 
        window["filaB" + i] = [];
        fila.forEach(function (item, posicion){ 
            window["filaB" + i][posicion] = item;
        });
        matriz2[i] = window["filaB" + i];
        matriz2S += "<tr>";
    }
        //Multiplicar las matrices
    for(var i = 0; i < 3; i++){ //columnas
        resultado += "<tr>";
        for(var j = 0; j < 3; j++){ //filas
            for(var k = 0; k < 2; k++){ //multiplicaciones
                multiplicacion += (window["filaA" + i][k] * window["filaB" + k][j]);
            }
            resultado += "<td>" + multiplicacion + "</td>";
            multiplicacion = 0;
        }  
        resultado += "</tr>";
    }

        //ESCRIBIR LOS RESULTADOS EL HTML
    matriz1H.innerHTML = "<table border='1'><caption>Matriz1</caption>" + matriz1S + "</table>";
    matriz2H.innerHTML = "<table border='1'><caption>Matriz2</caption>" + matriz2S + "</table>";
    resultadoH.innerHTML = "<table border='1'><caption>Resultado</caption>" + resultado + "</table>";
}
