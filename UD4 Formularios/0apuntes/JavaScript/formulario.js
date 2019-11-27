function empezarFuncion(){
    //ACCEDER AL FORMULARIO
        //con el id
    console.log(document.getElementById("formulario"));
        //con forms
    console.log(document.forms[0]);
        //con form y el id
    console.log(document.forms["formulario"]);
        //con el nombre del dormulario
    console.log(document.formulario);
    
    //HIJOS DEL FORMULARIO
    console.log(document.formulario.length);
    console.log(document.formulario.elements);
    console.log(document.formulario.elements["nombre"]);
    
    //CAMBIAR EL DESTINO DE LOS DATOS (ACTION)
    //document.formulario.action = "http://www.google.es";
    
    //RECOGER DATOS DEL FORMULARIO
        //input
    document.getElementById("nombre").value = "Hola";
    console.log(document.formulario.elements["nombre"].value);
        //valor por defecto
    document.getElementById("nombre").defaultValue = "Hola";
        //maximo de caracteres
    document.getElementById("nombre").maxLength = 10;
        //solo lectura
    document.getElementById("nombre").readOnly = true;
    document.getElementById("nombre").style.backgroundColor = "grey";
        //Validacion interna
    document.getElementById("nombre").required = true;  
}

function validar(){
    //Si es valido, envía los datos
    if(document.getElementById("nombre").value !== "" && document.getElementById("apellidos").value !== ""){
        return true;
    }
    return false;
}
