function empezarFuncion(){

    var cadena = "Esta cadena si va a ser una cadena larga para \n\
los ejemplos de cada una de las cadenas";
    
    var exp = new RegExp("una","g");
    //Buscar la posición de la coincidencia
    console.log(cadena.search(exp));
    
    //Todas las posiciones que coinciden
    console.log("Todas las posiciones que coinciden");
    while(array = exp.exec(cadena)){
        console.log(array);
    }
    
    //Buscar lo que empiece con "cad"
    console.log('Buscar lo que empiece con "cad"');
    exp = /\scad/g;  //  \s significa un espacio. Si no lo pones explota because he can
    while(array = exp.exec(cadena)){
        console.log(array);
    }
    
    //Buscar c + tres letras y un espacio
    console.log("Buscar c + tres letras y un espacio");
    exp = /\sc.{3}\s/g;
    while(array = exp.exec(cadena)){
        console.log(array);
    }
    
    
    //Comprobar que un iban es español (ES(2 numeros))
     console.log('Comprobar que un iban es español (ES(2 numeros))');
    exp = /^ES[0-9]{2}/g;
    console.log(exp.test("ES34"));
    
    //Elegir una opcion
     console.log('Elegir una opción');
    exp = /lapiz|boli/g;  //NO SEPARARLO CON ESPACIOS
    console.log(exp.test("boli"));
    
    //Comprobar que acaba en "."
     console.log('Comprobar que acaba en "."');
    exp = /\.$/g;  //CONTRABARRA PARA DECIRLE QUE ES . Y NO COMODIN
    console.log(exp.test("buenas."));
    
    //Comprobar que empieza por una letra (no especial)
     console.log('Comprobar que empieza por una letra');
    exp = /^[a-z]/gi;  //La i ignora mayusculidad y minusculidad
    console.log(exp.test("Buenas."));
    
    //\d y \D dos letras y 4 números
     console.log('\d y \D dos letras y 4 números');
    exp = /^\D{2}\d{4}$/;    // ^ y $ para decirle que ese es el comienzo y el final 
    console.log(exp.test("aa1234"));
    
    //Grupos anónimos
     console.log('Grupos anónimos');
    exp = /(\D{2}).*\1.*/;    // ^ y $ para decirle que ese es el comienzo y el final 
    console.log(exp.test("Rosa Perez Rojo"));
    
    //Función replace
    exp = /a/g;
    console.log(cadena.replace(exp, "@"));
    exp = /[eE]/g;
    console.log(cadena.replace(exp, function(letra){
        if(letra === "e"){
            return "€";
        }
        if(letra === "E"){
            return "3";
        }
    }));
    
}
