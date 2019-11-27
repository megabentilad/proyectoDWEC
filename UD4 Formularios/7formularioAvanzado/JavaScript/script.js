function empezarFuncion(){
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    dni = document.getElementById("dni");
    email = document.getElementById("email");
    ciudad = document.getElementById("ciudad");
    pais = document.getElementById("pais");
    
    nombre.addEventListener('blur', eValidarAlfabetico, false);
}

function eValidarAlfabetico(){
    this.style.borderColor = "initial";
    
    if(validarAlfabetico(this.value)){
        this.style.borderColor = "red";
        alert("Has relenado mal el campo.");
    }else{
        this.style.borderColor = "green";
    }
}

function validar(){
    nombre.style.borderColor = "initial";
    apellidos.style.borderColor = "initial";
    dni.style.borderColor = "initial";
    email.style.borderColor = "initial";
    ciudad.style.borderColor = "initial";
    pais.style.borderColor = "initial";
    
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
    if(!validarDni(document.formulario.elements["dni"].value)){
        document.getElementById("dni").style.borderColor = "red";
        bien = false;
    }
    if(!validarEmail(document.formulario.elements["email"].value)){
        document.getElementById("email").style.borderColor = "red";
        bien = false;
    }
    if(!validarAlfabetico(document.formulario.elements["ciudad"].value)){
        document.getElementById("ciudad").style.borderColor = "red";
        bien = false;
    }else{
        document.getElementById("ciudad").value = document.formulario.elements["ciudad"].value.charAt(0).toUpperCase() + document.formulario.elements["ciudad"].value.slice(1);
    }
    if(!validarAlfabetico(document.formulario.elements["pais"].value)){
        document.getElementById("pais").style.borderColor = "red";
        bien = false;
    }else{
        document.getElementById("pais").value = document.formulario.elements["pais"].value.charAt(0).toUpperCase() + document.formulario.elements["pais"].value.slice(1);
    }
    
    if(bien){
        console.log(document.formulario.elements["nombre"].value);
        console.log(document.formulario.elements["apellidos"].value);
        console.log(document.formulario.elements["dni"].value);
        console.log(document.formulario.elements["email"].value);
        console.log(document.formulario.elements["ciudad"].value);
        console.log(document.formulario.elements["pais"].value);
    }
    return bien;
}

window.addEventListener('load',empezarFuncion, false);
