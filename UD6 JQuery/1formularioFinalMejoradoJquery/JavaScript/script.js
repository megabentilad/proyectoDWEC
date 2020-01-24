$(function (){
    
    //VALIDACIONES
    $('#nombreA').on('blur', eValidarAlfabetico);
    $('#nombreP').on('blur', eValidarAlfabetico);
    $('#apellidosA').on('blur', eValidarAlfabetico);
    $('#apellidosP').on('blur', eValidarAlfabetico);
    $('#dniA').on('blur', eValidarDni);
    $('#dniP').on('blur', eValidarDni);
    $('#emailA').on('blur', eValidarEmail);
    $('#emailP').on('blur', eValidarEmail);
    $('#mensajeA').on('blur', eValidarAlfanumerico);
    $('#mensajeP').on('blur', eValidarAlfanumerico);
    $('#aceptar').on('click', eSumarAsignatura);
    $('#eliminar').on('click', eBorrarAsignatura);    
    $('#lpdA').on('click', eComprobarSeleccionado);
    $('#lpdP').on('click', eComprobarSeleccionado);
    $('#enviarA').on('click', eComprobarCB);
    $('#enviarP').on('click', eComprobarSelect);
       
    //FORMULARIOS
    $('#Balumno').on('click', cambiarFormulario);
    $('#Bprofesor').on('click', cambiarFormulario);
    
    //ASIGNATURAS A
    $('#cicloA').on('change', mostrarAsignaturasA);
    $('#cursoA').on('change', mostrarAsignaturasA);
    
    //ASIGNATURAS P
    $('#cicloP').on('change', mostrarAsignaturasP);
    $('#cursoP').on('change', mostrarAsignaturasP);


function eValidarAlfabetico(){
    if(!validarAlfabetico($(this).val(), 1)) {
        this.focus();
        if(!$(this).next().next().is($('#error'))){
            $(this).next().after("<span id='error' style='color:red'>Solo se permiten letras.</span>");
        }
        $(this).css("border-color", "red");
        
    }else{
        activarEnviar();
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        $('#error').remove();
        $(this).css("border-color", "green");
    }
}
function eValidarDni(){
    if(!validarDni($(this).val())) {
        this.focus();
        $('#error').remove();
        if(!$(this).next().next().is($('#error'))){
            if($(this).val().length !== 9){
                $(this).next().after("<span id='error' style='color:red'>El DNI introducido debe tener 9 caracteres.</span>");
            }
            $(this).next().after("<span id='error' style='color:red'>El formato es incorrecto.</span>");
        }
        $(this).css("border-color", "red");
    }else{
        activarEnviar();
        $('#error').remove();
        $(this).css("border-color", "green");
    }
}
function eValidarEmail(){
    if(!validarEmail(this.value)) {
        this.focus();
        if(!$(this).next().next().is($('#error'))){
            $(this).next().after("<span id='error' style='color:red'>El formato del email no es válido.</span>");
        }
        $(this).css("border-color", "red");
    }else{
        activarEnviar();
        $('#error').remove();
        $(this).css("border-color", "green");
    }
}
function eValidarAlfanumerico(){
    if(!validarAlfanumerico(this.value, 1)) {
        this.focus();
        if(!$(this).next().next().is($('#error'))){
            $(this).next().after("<span id='error' style='color:red'>No lo dejes en blano, que eso está feo.</span>");
        }
        $(this).css("border-color", "red");
    }else{
        activarEnviar();
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        $('#error').remove();
        $(this).css("border-color", "green");
    }
}

function cambiarFormulario(){
    if($(this).text() === "Alumno"){
        $("#formularioA").css("display", "block");
        $("#formularioP").css("display", "none");
        $("#Balumno").css({"cursor": "default","backgroundColor": "cyan"});   ///NADA DE CORCHETES DE POR MEDIO UuU
        $("#Bprofesor").css({"cursor": "pointer","backgroundColor": "transparent"});
    }else{
        $("#formularioA").css("display", "none");
        $("#formularioP").css("display", "block");
        $("#Balumno").css({"cursor": "pointer","backgroundColor": "transparent"});
        $("#Bprofesor").css({"cursor": "default","backgroundColor": "cyan"});
    }
}
function eSumarAsignatura() { //PARA PROFESOR
    if($('#asignaturasP').children().length !== 0){
            console.log(jQuery.type($('#asignaturasP').children().children(":selected")));
        $("#asignaturasProf").append($('#asignaturasP').children().children(":selected").clone());
    }
}
function eBorrarAsignatura(){        //nuevo                                                                //RECUERDA PONER LA MALDITA ALMMHOADILLA
    if($("#asignaturasProf").children().length !== 0){
        $("#asignaturasProf").children(":selected").remove();
    }
}
function eComprobarSeleccionado(){
    activarEnviar();
}
function eComprobarCB(){
    var cajas = document.getElementsByClassName("CBDAW1");
    var contador = 0;
    $(".CBDAW1").each(function(){
        if($(this).is("checkbox") && $(this).attr("checked")){
            contador++;
        }
    });
    if(contador === 0){
        $("#faltaCheckbox").css("visibility", "visible");
        return false;
    }else{
        $("#faltaCheckbox").css("visibility", "hidden");
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
    
    var divAsignaturas = $("#asignaturasA");
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
                    selector.appendChild(option);
                }
            }else{
                for(var i = 0; i < asignaturasDAW2A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasDAW2A2[i]);

                    texto = document.createTextNode(asignaturasDAW2A1[i]);
                    option.appendChild(texto);
                    selector.appendChild(option);
                }
            }
        }else{
            if(cursoP.value === "primeroP"){
                for(var i = 0; i < asignaturasSMR1A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasSMR1A2[i]);

                    texto = document.createTextNode(asignaturasSMR1A1[i]);
                    option.appendChild(texto);
                    selector.appendChild(option);
                }
            }else{
                for(var i = 0; i < asignaturasSMR2A1.length; i++){
                    option = document.createElement("option");
                    option.setAttribute("value", asignaturasSMR2A2[i]);

                    texto = document.createTextNode(asignaturasSMR2A1[i]);
                    option.appendChild(texto);
                    selector.appendChild(option);
                }
            }
        }
    }
}
function eComprobarSelect(){
    if(asignaturasProf.hasChildNodes()){
        document.getElementById("faltaSelect").style.visibility = "hidden";
        return true;
    }else{
        document.getElementById("faltaSelect").style.visibility = "visible";
        return false;
    }
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
})