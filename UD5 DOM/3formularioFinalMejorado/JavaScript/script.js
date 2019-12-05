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
    eliminar = document.getElementById("eliminar");       //nuevo
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
    eliminar.addEventListener('click', eBorrarAsignatura, false);     //nuevo
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
    var option;
    if(document.getElementById("DAW1P").style.display !== "none"){
        option = document.getElementById("DAW1P").selectedIndex.cloneNode(true);    //nuevo
    }else{
        if(document.getElementById("DAW2P").style.display !== "none"){
            option = document.getElementById("DAW2P").cloneNode(true);    //nuevo
        }else{
           if(document.getElementById("SMR1P").style.display !== "none"){
                option = document.getElementById("SMR1P").cloneNode(true);    //nuevo
            }else{
                if(document.getElementById("SMR2P").style.display !== "none"){
                    option = document.getElementById("SMR2P").cloneNode(true);    //nuevo
                }
            }
        }
    }
    asignaturasP.appendChild(option);
}
function eBorrarAsignatura(){        //nuevo
    asignaturasP.childNodes.forEach(function(item){
        asignaturasP.removeChild(item);
    });
}
function eComprobarSeleccionado(){
    activarEnviar();
}
function eComprobarCB(){
    var cajas = document.getElementsByTagName("input");
    var contador = 0;
    for(var i = 0; i< cajas.length; i++){
        if(cajas[i].type === "checkbox"){
            if(cajas[i].checked === true){
                contador++;
            }
        }
    }
    if(contador === 1){
        document.getElementById("faltaCheckbox").style.visibility = "visible";
        return false;
    }else{
        document.getElementById("faltaCheckbox").style.visibility = "hidden";
        return true;
    }
}

function mostrarAsignaturasA(){
    var asignaturasDAW1A1 = ["Sistemas informáticos", "Bases de datos","Programación","Lenguaje de marcas","Entornos de desarrollo","Formación y orientación laboral"];
    var asignaturasDAW1A2 = ["SI", "BD","PROG","LMSGI","ED","FOL"];
    
    var asignaturasDAW2A1 = ["Desarrollo web en entorno cliente","Desarrollo web en entorno servidor","Despliegue de aplicaciones web","Diseño de interfaces web","Empresa"];
    var asignaturasDAW2A2 = ["DWEC", "DWES","DAW","DIW","E"];
    
    var asignaturasSMR1A1 = ["Sistemas operativos monopuestos","Aplicaciones ofimáticas","Redes locales","Aplicaciones web","Formación y orientación laboral"];
    var asignaturasSMR1A2 = ["SOM","AO","RL","AW","FOL"];
    
    var asignaturasSMR2A1 = ["Montaje y mantenimiento de equipos","Sistemas operativos en red","Seguridad informática","Servicion en red","Empresa e iniciativa emprendedora"];
    var asignaturasSMR2A2 = ["MME","SOR","SI","SR","EIE"];
    
    var divAsignaturas = document.getElementById("asignaturasA")
    var opcion;
    var etiqueta;
    var texto;
    //borrar lo anterioro
    while(divAsignaturas.hasChildNodes()){
            divAsignaturas.removeChild(divAsignaturas.childNodes[0]);
    }
    if(cicloA.value !== "nada" && cursoA.value !== "nada"){
        if(cicloA.value === "DAW"){
            if(cursoA.value === "primeroA"){
                for(var i = 0; i < asignaturasDAW1A1.length; i++){
                    opcion = document.createElement("input");
                    opcion.setAttribute("type","checkbox");
                    opcion.setAttribute("name","DAW1A[" + asignaturasDAW1A2[i] + "]");
                    opcion.setAttribute("id","DAW1A[" + asignaturasDAW1A2[i] + "]");
                    opcion.setAttribute("class","CBDAW1");
                    divAsignaturas.appendChild(opcion);

                    etiqueta = document.createElement("label");
                    etiqueta.setAttribute("for","DAW1A[" + asignaturasDAW1A2[i] + "]");

                    texto = document.createTextNode(asignaturasDAW1A1[i]);
                    etiqueta.appendChild(texto);

                    divAsignaturas.appendChild(etiqueta);

                    divAsignaturas.appendChild(document.createElement("br"));
                }
            }else{
                for(var i = 0; i < asignaturasDAW2A1.length; i++){
                    opcion = document.createElement("input");
                    opcion.setAttribute("type","checkbox");
                    opcion.setAttribute("name","DAW1A[" + asignaturasDAW2A2[i] + "]");
                    opcion.setAttribute("id","DAW1A[" + asignaturasDAW2A2[i] + "]");
                    opcion.setAttribute("class","CBDAW1");
                    divAsignaturas.appendChild(opcion);

                    etiqueta = document.createElement("label");
                    etiqueta.setAttribute("for","DAW1A[" + asignaturasDAW2A2[i] + "]");

                    texto = document.createTextNode(asignaturasDAW2A1[i]);
                    etiqueta.appendChild(texto);

                    divAsignaturas.appendChild(etiqueta);

                    divAsignaturas.appendChild(document.createElement("br"));
                }
            }
        }else{
            if(cursoA.value === "primeroA"){
                for(var i = 0; i < asignaturasSMR1A1.length; i++){
                    opcion = document.createElement("input");
                    opcion.setAttribute("type","checkbox");
                    opcion.setAttribute("name","DAW1A[" + asignaturasSMR1A2[i] + "]");
                    opcion.setAttribute("id","DAW1A[" + asignaturasSMR1A2[i] + "]");
                    opcion.setAttribute("class","CBDAW1");
                    divAsignaturas.appendChild(opcion);

                    etiqueta = document.createElement("label");
                    etiqueta.setAttribute("for","DAW1A[" + asignaturasSMR1A2[i] + "]");

                    texto = document.createTextNode(asignaturasSMR1A1[i]);
                    etiqueta.appendChild(texto);

                    divAsignaturas.appendChild(etiqueta);

                    divAsignaturas.appendChild(document.createElement("br"));
                }
            }else{
                for(var i = 0; i < asignaturasSMR2A1.length; i++){
                    opcion = document.createElement("input");
                    opcion.setAttribute("type","checkbox");
                    opcion.setAttribute("name","DAW1A[" + asignaturasSMR2A2[i] + "]");
                    opcion.setAttribute("id","DAW1A[" + asignaturasSMR2A2[i] + "]");
                    opcion.setAttribute("class","CBDAW1");
                    divAsignaturas.appendChild(opcion);

                    etiqueta = document.createElement("label");
                    etiqueta.setAttribute("for","DAW1A[" + asignaturasSMR2A2[i] + "]");

                    texto = document.createTextNode(asignaturasSMR2A1[i]);
                    etiqueta.appendChild(texto);

                    divAsignaturas.appendChild(etiqueta);

                    divAsignaturas.appendChild(document.createElement("br"));
                }
            }
        }
    }
}

function mostrarAsignaturasP(){
    var asignaturasDAW1A1 = ["Sistemas informáticos", "Bases de datos","Programación","Lenguaje de marcas","Entornos de desarrollo","Formación y orientación laboral"];
    var asignaturasDAW1A2 = ["SI", "BD","PROG","LMSGI","ED","FOL"];
    
    var asignaturasDAW2A1 = ["Desarrollo web en entorno cliente","Desarrollo web en entorno servidor","Despliegue de aplicaciones web","Diseño de interfaces web","Empresa"];
    var asignaturasDAW2A2 = ["DWEC", "DWES","DAW","DIW","E"];
    
    var asignaturasSMR1A1 = ["Sistemas operativos monopuestos","Aplicaciones ofimáticas","Redes locales","Aplicaciones web","Formación y orientación laboral"];
    var asignaturasSMR1A2 = ["SOM","AO","RL","AW","FOL"];
    
    var asignaturasSMR2A1 = ["Montaje y mantenimiento de equipos","Sistemas operativos en red","Seguridad informática","Servicion en red","Empresa e iniciativa emprendedora"];
    var asignaturasSMR2A2 = ["MME","SOR","SI","SR","EIE"];
    
    var divAsignaturas = document.getElementById("asignaturasP")
    var selector;
    var texto;
    var option;
    //borrar lo anterioro
    while(divAsignaturas.hasChildNodes()){
            divAsignaturas.removeChild(divAsignaturas.childNodes[0]);
    }
    if(cicloP.value !== "nada" && cursoP.value !== "nada"){
        selector = document.createElement("select");
        divAsignaturas.appendChild(selector);
        if(cicloP.value === "DAW"){
            if(cursoP.value === "primeroP"){
                for(var i = 0; i < asignaturasDAW1A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasDAW1A2[i]);

                    texto = document.createTextNode(asignaturasDAW1A1[i]);
                    option.appendChild(texto);
                }
            }else{
                for(var i = 0; i < asignaturasDAW2A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasDAW2A2[i]);

                    texto = document.createTextNode(asignaturasDAW2A1[i]);
                    option.appendChild(texto);
                }
            }
        }else{
            if(cursoP.value === "primeroP"){
                for(var i = 0; i < asignaturasSMR1A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasSMR1A2[i]);

                    texto = document.createTextNode(asignaturasSMR1A1[i]);
                    option.appendChild(texto);
                }
            }else{
                for(var i = 0; i < asignaturasSMR2A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasSMR2A2[i]);

                    texto = document.createTextNode(asignaturasSMR2A1[i]);
                    option.appendChild(texto);
                }
            }
        }
        selector.appendChild(option);
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
