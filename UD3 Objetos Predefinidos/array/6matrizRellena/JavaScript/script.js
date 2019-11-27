function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var matriz2H = document.getElementById("matriz2");

        //Creaci��n de variables
    var matriz = [];
    var fila = [];
    var tamano;
    var matriz2 = ""; //Resoluci��n m��s sencilla
    
        //Validaci��n de la entrada (tama?o)
    do{
        bien=true;        
        tamano = prompt('Introduce el tamaño de la matriz');
        tamano = parseInt(tamano);
        if(isNaN(tamano) || tamano<1){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número no menor de 1.");
        } 
    }while(bien === false);       
        
        //Bucle generador de la matriz
    for(var i = 0; i < tamano; i++){ //columnas
        matriz2 += "<tr>"; //por cada columna un tr
        for(var j = 0; j < tamano; j++){ //filas
            if(i === 0 || j === 0){
                fila[j] = 1; 
            }else{  
                fila[j] = fila[j-1] + matriz[i-1][j]; 
            }
        }   
        matriz[i] = fila;
        matriz2 += fila.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
            return '<td>' + item + '</td>';
        });
        matriz2 += "</tr>";
    }
    /*
     * 
     * window es un objeto. Concretamente es el objeto que contiene todas las variables de la aplicaci��n javascript.
     * Las variables globales son atributos del objeto window.
     * 
     */

        //ESCRIBIR LOS RESULTADOS EL HTML
    matriz2H.innerHTML = "<table border='1'>" + matriz2 + "</table>";
}
