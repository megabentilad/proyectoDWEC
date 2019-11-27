function empezarFuncion(){
    /*document.getElementById("nombre").required = true;
    document.getElementById("apellidos").required = true;
    document.getElementById("email").required = true; */
}

function validar(){
    document.getElementById("nombre").style.borderColor = "initial";
    document.getElementById("apellidos").style.borderColor = "initial";
    document.getElementById("email").style.borderColor = "initial";
    

            
    var bien = true;
    
    if(!validarAlfabetico(document.formulario.elements["nombre"].value)){
        document.getElementById("nombre").style.borderColor = "red";
        bien = false;
    }else{
        document.getElementById("nombre").value = document.formulario.elements["nombre"].value.charAt(0).toUpperCase() + document.formulario.elements["nombre"].value.slice(1);
    }
    if(!validarAlfabetico(document.formulario.elements["apellidos"].value)){
        document.getElementById("apellidos").style.borderColor = "red";
        bien = false;
    }/*else{
        var separado = document.formulario.elements["apellidos"].value.toLowerCase().split(' ');
        var final;
        for (var i = 1; i <= separado.length; i++) {
            separado[i].charAt(0).toUpperCase();     
            final = separado[i] + " "; 
        }
        document.formulario.elements["apellidos"].value = final.trim();
    } */
    else{
        document.getElementById("apellidos").value = document.formulario.elements["apellidos"].value.charAt(0).toUpperCase() + document.formulario.elements["apellidos"].value.slice(1);
    }
    if(!validarEmail(document.formulario.elements["email"].value)){
        document.getElementById("email").style.borderColor = "red";
        bien = false;
    }
    
    if(!validarRadioB("genero")){
        bien = false;
        alert("Selecciona uno de los radio button");
    }
    
    if(!validarCBox("aficion", 3)){
        bien = false;
        alert("Selecciona al menos 3 opciones");
    } 
    
    if(bien){
        console.log(document.formulario.elements["nombre"].value);
        console.log(document.formulario.elements["apellidos"].value);
        console.log(document.formulario.elements["email"].value);
        console.log(document.formulario.elements["genero"].value);
        console.log(document.formulario.elements["aficion"].value);
    }
    return bien;
}
