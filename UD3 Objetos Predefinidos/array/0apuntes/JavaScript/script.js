function empezarFuncion(){
    //Definir un array
        var miArray = new Array(7);  //Si no le metemos un número, se reserva el espacio dinamicamente
    // var miArray = [7] también es posible
        console.log(miArray);
    
    //Definir un array ya relleno
        var miArray2 = new Array('H','o','l','a');
        console.log(miArray2 + ' buenas'); //Se puede mostrar sin un for each, un toString también vale
    
    //PROPIEDADES DE UN ARRAY
        console.log('El tamaño del array 2 es: ' + miArray2.length);
    
    //Se pueden hacer cosas chulas cómo:
        miArray2.length = 6;
        console.log(miArray2);
     
    //Para sacar algo en concreto hacemos...
        console.log(miArray2[0] + miArray2[3]);
        
    //RECORRER EL ARRAY    
        //Recorrerlo con un for
            for(var i = 0; i < miArray2.length; i++){
                console.log('El valor de la posición ' + (i+1) + ' contiene ' + miArray2[i]);
            }

            console.log('--------------------------------------------------------------------------------------');

        //Recorrerlo con un for each
            miArray2.forEach(function (item, posicion){
                console.log('El valor de la posición ' + (posicion+1) + ' contiene ' + item);
            });
            
            console.log('--------------------------------------------------------------------------------------');
            
        //Recorrerlo con map 
            var otroArray2 = miArray2.map(function (item){ //sirve para modificar uniformemente los elementos de un array
                return '*' + item + '*';
            });
            console.log(otroArray2);
            
            console.log('......................................................................................');
            
    //Modificar el array
        otroArray2[0] = 'H';
        console.log(otroArray2);
        
    //Para añadir un elemento en la siguiente posición...
        otroArray2.push('Casi todo con asteriscos');
        console.log(otroArray2);
        
    //Para borrar el último elemento
        otroArray2.pop();
        console.log(otroArray2);
        
    //Hacer subArrays
        var arrayLimpio = miArray2.slice(0, 4); //Primero incluido y segundo no incluido
        console.log(arrayLimpio);
        
    //Modificar borrando
        otroArray2.splice(4, 2); //El primero (incluido) es desde donde y el segundo es cuantas posiciones
        console.log(otroArray2);
        
    //Modificar añadiendo
        arrayLimpio.splice(0, 0, '¡'); //El primero (incluido) es desde donde, el segundo es cuantas posiciones borra y el tervero es cual añade (solo añade uno. No importa los que borre)
        console.log(arrayLimpio);
        
    //ORDENACIÓN
        console.log('Orden alfabético (primero mayusculas y luego minusculas) ' + arrayLimpio.sort());
        console.log('Dado la vuelta ' + arrayLimpio.reverse());
        
    //Buscar dentro de un array
        var posicion = arrayLimpio.indexOf('l');
        console.log('La l está en la posición ' + posicion);
        
    //Buscar la posición de tres elementos iguales
    console.log('Debe salir 0,1,3,6,7,9,13');
        var nombre = ['ana','ana','pepe','ana','jose','maria','ana','ana','pedro','ana','josemaria','esteban','pepe','ana'];
        var cachos = nombre;
        var p = 0;
        var aux = 0;
        var aumentos = 0;
        var posiciones = [];
        while(cachos.indexOf('ana') !== -1){  //debería sacar 1,4,5,7,11
            aux = p+aux;  //suma de todas las posiciones anteriores
            p = cachos.indexOf('ana');
            posiciones.push(p+aux+aumentos); //suma de las posiciones anteriores más la actual más la compensación de los 0
            cachos = cachos.slice(p+1);
            aumentos++;
        }
        console.log(posiciones); 
        
    //Filtro
        var datos = ['uno','siete','pedro','jacinto','uno','22'];
        //Esto es una función muy simplificada
        var filtrado = datos.filter(item => item !== 'uno'); //Le decimos que filtrado tenga todo menos los 'uno'
        console.log(filtrado);
        
        
    //STRIIIIINNNNGGGGGGSSSSSS
    var cadenaGuayH = document.getElementById("negrita");
    var cadenaGuay = "Buenas UuU   <3";
    cadenaGuayH.innerHTML = cadenaGuay;
    /*
     * .bold()    -> Negrita
     * .big()   -> Grande
     * .fontcolor("color")   -> Color de la fuente
     * .fontsize(tamaño)    -> Tamaño de la fuente
     * .italic()   -> Cursiva
     * .anchor("Nombre")  ->Crea una etiqueta con ese nombre
     * .link("enlace")  -> Hace que el texto sea un enlace (<a href>)
     * .small()    -> Hace el texto más pequeño
     * .sup()    -> Hace que el texto sea un superíndice
     * .sub()    -> Hace que el texto sea un subíndice
     * .strike()    -> Tacha el texto
     * .blink()    -> Amarillo parpadeante en desuso
     */
        console.log(nombre.indexOf('Rodrigo'));
}
