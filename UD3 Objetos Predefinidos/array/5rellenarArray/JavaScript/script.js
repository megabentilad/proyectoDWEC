function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var arrayH = document.getElementById("array");

        //INTRODUCCIÓN DEL NÚMERO Y TRANSFORMACIÓN DEL MISMO A "number"
    var bien;
    var contador = 0;
    var array = [];
    var posicion;
    var palabra;
    do{
        do{
            bien=true;        
            posicion = prompt('Introduce la posición en el array');
            posicion = parseInt(posicion);
            if(isNaN(posicion) || posicion<1){
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un número no menor de 1.");
            }
            if(array[posicion-1] !== undefined &&  bien === true){
                bien = false; 
                alert("Esta posición ya está ocupada");
            }
        }while(bien === false);       
        palabra = prompt('Introduce la palabra que va en esa posición');
        array[posicion-1] = palabra; 
        contador++;
    }while(contador !== 10);


    var array = array.map(function (item){ //Con esto le doy formato para mostrarlo en la tabla
        return '<td>' + item + '</td>';
    });
        //ESCRIBIR LOS RESULTADOS EL HTML
    arrayH.innerHTML = array;
}
