function empezarFuncion(){
    
    //VALIDACIONES
    nombreA = document.getElementById("nombreA");
    nombreP = document.getElementById("nombreP");
    apellidosA = document.getElementById("apellidosA");
    apellidosP = document.getElementById("apellidosP");
    dniA = document.getElementById("dniA");
    dniP = document.getElementById("dniP");
    emailA = document.getElementById("emailA");
    emailP = document.getElementById("emailP");
    mensajeA = document.getElementById("mensajeA");
    mensajeP = document.getElementById("mensajeP");
    aceptar = document.getElementById("aceptar");
    asignaturasP = document.getElementById("asignaturasP");
    lpdP = document.getElementById("lpdP");
    lpdA = document.getElementById("lpdA");
    enviarA = document.getElementById("enviarA");

    
    nombreA.addEventListener('blur', eValidarAlfabetico, false);
    nombreP.addEventListener('blur', eValidarAlfabetico, false);
    apellidosA.addEventListener('blur', eValidarAlfabetico, false);
    apellidosP.addEventListener('blur', eValidarAlfabetico, false);
    dniA.addEventListener('blur', eValidarDni, false);
    dniP.addEventListener('blur', eValidarDni, false);
    emailA.addEventListener('blur', eValidarEmail, false);
    emailP.addEventListener('blur', eValidarEmail, false);
    mensajeA.addEventListener('blur', eValidarAlfanumerico, false);
    mensajeP.addEventListener('blur', eValidarAlfanumerico, false);
    aceptar.addEventListener('click', eSumarAsignatura, false);
    lpdP.addEventListener('click', eComprobarSeleccionado, false);
    lpdA.addEventListener('click', eComprobarSeleccionado, false);
    enviarA.addEventListener('click', eComprobarCB, false);
    
    
    //FORMULARIOS
    tipoFormularioA = document.getElementById("Balumno");
    tipoFormularioP = document.getElementById("Bprofesor");
    
    tipoFormularioA.addEventListener('click', cambiarFormulario, false);
    tipoFormularioP.addEventListener('click', cambiarFormulario, false);
    
    //ASIGNATURAS A
    cicloA = document.getElementById("cicloA");
    cursoA = document.getElementById("cursoA");
    
    cicloA.addEventListener('change', mostrarAsignaturasA, false);
    cursoA.addEventListener('change', mostrarAsignaturasA, false);
    
    //ASIGNATURAS P
    cicloP = document.getElementById("cicloP");
    cursoP = document.getElementById("cursoP");
    
    cicloP.addEventListener('change', mostrarAsignaturasP, false);
    cursoP.addEventListener('change', mostrarAsignaturasP, false);
}

function eValidarAlfabetico(){
    if(!validarAlfabetico(this.value, 1)) {
        this.focus();
    }else{
        activarEnviar();
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
}
function eValidarDni(){
    if(!validarDni(this.value, 1)) {
        this.focus();
    }else{
        activarEnviar();
    }
}
function eValidarEmail(){
    if(!validarEmail(this.value, 1)) {
        this.focus();
    }else{
        activarEnviar();
    }
}
function eValidarAlfanumerico(){
    if(!validarAlfanumerico(this.value, 1)) {
        this.focus();
    }else{
        activarEnviar();
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
}

function cambiarFormulario(){
    if(this.innerHTML === "Alumno"){
        document.getElementById("formularioA").style.display = "block";
        document.getElementById("formularioP").style.display = "none";
        tipoFormularioA.style.backgroundColor = "cyan";
        tipoFormularioP.style.backgroundColor = "transparent";
        tipoFormularioA.style.cursor = 'default';
        tipoFormularioP.style.cursor = "pointer";
    }else{
        document.getElementById("formularioP").style.display = "block";
        document.getElementById("formularioA").style.display = "none";
        tipoFormularioP.style.backgroundColor = "cyan";
        tipoFormularioA.style.backgroundColor = "transparent";
        tipoFormularioP.style.cursor = 'default';
        tipoFormularioA.style.cursor = 'pointer';
    }
}
function eSumarAsignatura() {
    var option = document.createElement("option");
    if(document.getElementById("DAW1P").style.display !== "none"){
        option.value = document.getElementById("DAW1P").value;
        option.text = document.getElementById("DAW1P").value;
    }else{
        if(document.getElementById("DAW2P").style.display !== "none"){
            option.value = document.getElementById("DAW2P").value;
            option.text = document.getElementById("DAW2P").value;
        }else{
           if(document.getElementById("SMR1P").style.display !== "none"){
                option.value = document.getElementById("SMR1P").value;
                option.text = document.getElementById("SMR1P").value;
            }else{
                if(document.getElementById("SMR2P").style.display !== "none"){
                    option.value = document.getElementById("SMR2P").value;
                    option.text = document.getElementById("SMR2P").value;
                }
            }
        }
    }
    asignaturasP.add(option);
}
function eComprobarSeleccionado(){
    activarEnviar();
}
function eComprobarCB(){
    if(document.getElementById("DAW1A").style.display !== "none"){
        var cajas = document.getElementsByClassName("CBDAW1");
        
    }else{
       if(document.getElementById("DAW1A").style.display !== "none"){
           var cajas = document.getElementsByClassName("CBDAW2");
        }else{
            if(document.getElementById("DAW1A").style.display !== "none"){
                var cajas = document.getElementsByClassName("CBSMR1");
            }else{
                var cajas = document.getElementsByClassName("CBSMR2");
            }
        }  
    }
    var contador = 0;
    for(var i = 0; i< cajas.length; i++){
        if(cajas[i].checked === true){
            contador++;
        }
    }
    if(contador === 0){
        document.getElementById("faltaCheckbox").style.visibility = "visible";
        return false;
    }else{
        document.getElementById("faltaCheckbox").style.visibility = "hidden";
        return true;
    }
}

function mostrarAsignaturasA(){
    if(cicloA.value === "DAW"){
        if(cursoA.value === "primeroA"){
            document.getElementById("DAW1A").style.display = "block";
            document.getElementById("DAW2A").style.display = "none";
            document.getElementById("SMR1A").style.display = "none";
            document.getElementById("SMR2A").style.display = "none";
        }else{
            document.getElementById("DAW1A").style.display = "none";
            document.getElementById("DAW2A").style.display = "block";
            document.getElementById("SMR1A").style.display = "none";
            document.getElementById("SMR2A").style.display = "none";
        }
    }else{
        if(cursoA.value === "primeroA"){
            document.getElementById("DAW1A").style.display = "none";
            document.getElementById("DAW2A").style.display = "none";
            document.getElementById("SMR1A").style.display = "block";
            document.getElementById("SMR2A").style.display = "none";
        }else{
            document.getElementById("DAW1A").style.display = "none";
            document.getElementById("DAW2A").style.display = "none";
            document.getElementById("SMR1A").style.display = "none";
            document.getElementById("SMR2A").style.display = "block";
        }
    }
}

function mostrarAsignaturasP(){
    if(cicloP.value === "DAW"){
        if(cursoP.value === "primeroP"){
            document.getElementById("DAW1P").style.display = "block";
            document.getElementById("DAW2P").style.display = "none";
            document.getElementById("SMR1P").style.display = "none";
            document.getElementById("SMR2P").style.display = "none";
        }else{
            document.getElementById("DAW1P").style.display = "none";
            document.getElementById("DAW2P").style.display = "block";
            document.getElementById("SMR1P").style.display = "none";
            document.getElementById("SMR2P").style.display = "none";
        }
    }else{
        if(cursoP.value === "primeroP"){
            document.getElementById("DAW1P").style.display = "none";
            document.getElementById("DAW2P").style.display = "none";
            document.getElementById("SMR1P").style.display = "block";
            document.getElementById("SMR2P").style.display = "none";
        }else{
            document.getElementById("DAW1P").style.display = "none";
            document.getElementById("DAW2P").style.display = "none";
            document.getElementById("SMR1P").style.display = "none";
            document.getElementById("SMR2P").style.display = "block";
        }
    }
}
function eComprobarSelect(){
    
}

function activarEnviar(){
    if(nombreA.value !== "" && apellidosA.value !=="" && dniA.value !=="" && emailA.value !=="" && mensajeA.value !=="" && lpdA.checked === true){
        document.getElementById("enviarA").disabled = false;
    }else{
        document.getElementById("enviarA").disabled = true;
    }
    if(nombreP.value !== "" && apellidosP.value !=="" && dniP.value !=="" && emailP.value !=="" && mensajeP.value !=="" && lpdP.checked === true){
        document.getElementById("enviarP").disabled = false;
    }else{
        document.getElementById("enviarP").disabled = true;
    }
}

window.addEventListener('load',empezarFuncion, false);
