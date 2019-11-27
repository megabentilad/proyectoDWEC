function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var ladosH = document.getElementById("lados");
    var perimetroH = document.getElementById("perimetro");
    var areaH = document.getElementById("area");

        //INTRODUCCIÓN DE NÚMEROS Y TRANSFORMACIÓN DE LOS MISMOS A "number"
    var lado1;
    var lado2;
    do{
        bien=true;        
        lado1 = prompt("Introduzca un lado");
        lado1 = parseInt(lado1);
        if(isNaN(lado1) || lado1 < 0){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número mayor que 0.");
        } 
    }while(bien === false);     
    do{
        bien=true;        
        lado2 = prompt("Introduzca el otro lado");
        lado2 = parseInt(lado2);
        if(isNaN(lado2) || lado2 < 0){
            bien = false;
            alert("El dato introducido no es válido. Debe introducir un número mayor que 0.");
        } 
    }while(bien === false);       
    
        //CAlCULAR PERIMETRO Y AREA
    var perimetro = lado1*2 + lado2*2;
    var area = lado1*lado2;
    
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    ladosH.innerHTML = "Lado 1: " + lado1 + "u  |   Lado 2: " + lado2 + "u";
    perimetroH.innerHTML = "Perímetro del rectángulo: " + perimetro + "u";
    areaH.innerHTML =  "Área del rectángulo: " + area + "u<sup>2</sup>";

}