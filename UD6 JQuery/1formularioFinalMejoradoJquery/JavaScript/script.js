$(function (){
    
    //VALIDACIONES
    $('#nombreA').on('blur', eValidarAlfabetico);
    $('#nombreP').on('blur', eValidarAlfabetico);
    $('#apellidosA').on('blur', eValidarAlfabetico);
    $('#apellidosP').on('blur', eValidarAlfabetico);
//    $('#dniA').on('blur', eValidarDni);
//    $('#dniP').on('blur', eValidarDni);
//    $('#emailA').on('blur', eValidarEmail);
//    $('#emailP').on('blur', eValidarEmail);
//    $('#mensajeA').on('blur', eValidarAlfanumerico);
//    $('#mensajeP').on('blur', eValidarAlfanumerico);
//    $('#aceptar').on('click', eSumarAsignatura);
//    $('#eliminar').on('click', eBorrarAsignatura);    
//    $('#lpdA').on('click', eComprobarSeleccionado);
//    $('#lpdP').on('click', eComprobarSeleccionado);
//    $('#enviarA').on('click', eComprobarCB);
//    $('#enviarP').on('click', eComprobarSelect);
//       
//    //FORMULARIOS
//    $('#Balumno').on('click', cambiarFormulario);
//    $('#profesor').on('click', cambiarFormulario);
//    
//    //ASIGNATURAS A
//    $('#cicloA').on('change', mostrarAsignaturasA);
//    $('#cursoA').on('change', mostrarAsignaturasA);
//    
//    //ASIGNATURAS P
//    $('#cicloP').on('change', mostrarAsignaturasP);
//    $('#cursoP').on('change', mostrarAsignaturasP);


function eValidarAlfabetico(){
    if(!validarAlfabetico($(this).val(), 1)) {
        this.focus();
        if(!$(this).next().is($('#error'))){
            $(this).after("<p id='error' style='color:red'>Solo se permiten letras.</p>");
        }
        $(this).css("border-color", "red");
        
    }else{
     //   activarEnviar();
        $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().slice(1));
        $('#error').remove();
        $(this).css("border-color", "green");
    }
}
//function eValidarDni(){
//    if(!validarDni(this.value, 1)) {
//        this.focus();
//    }else{
//        activarEnviar();
//    }
//}
//function eValidarEmail(){
//    if(!validarEmail(this.value, 1)) {
//        this.focus();
//    }else{
//        activarEnviar();
//    }
//}
//function eValidarAlfanumerico(){
//    if(!validarAlfanumerico(this.value, 1)) {
//        this.focus();
//    }else{
//        activarEnviar();
//        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
//    }
//}
//
//function cambiarFormulario(){
//    if(this.innerHTML === "Alumno"){
//        document.getElementById("formularioA").style.display = "block";
//        document.getElementById("formularioP").style.display = "none";
//        tipoFormularioA.style.backgroundColor = "cyan";
//        tipoFormularioP.style.backgroundColor = "transparent";
//        tipoFormularioA.style.cursor = 'default';
//        tipoFormularioP.style.cursor = "pointer";
//    }else{
//        document.getElementById("formularioP").style.display = "block";
//        document.getElementById("formularioA").style.display = "none";
//        tipoFormularioP.style.backgroundColor = "cyan";
//        tipoFormularioA.style.backgroundColor = "transparent";
//        tipoFormularioP.style.cursor = 'default';
//        tipoFormularioA.style.cursor = 'pointer';
//    }
//}
//function eSumarAsignatura() {   //No funciona
//    var option;
//    var select;
//    if(document.getElementById('asignaturasP').hasChildNodes()){
//        select = document.getElementsByTagName('select')[4];
//        option = select.childNodes[select.selectedIndex].cloneNode(true);
//        console.log(option);
//    }
//    asignaturasProf.appendChild(option);
//}
//function eBorrarAsignatura(){        //nuevo
//    if(asignaturasProf.hasChildNodes()){
//        asignaturasProf.removeChild(asignaturasProf.childNodes[asignaturasProf.selectedIndex]);
//    }
//}
//function eComprobarSeleccionado(){
//    activarEnviar();
//}
//function eComprobarCB(){
//    var cajas = document.getElementsByClassName("CBDAW1");
//    var contador = 0;
//    for(var i = 0; i< cajas.length; i++){
//        if(cajas[i].type === "checkbox"){
//            if(cajas[i].checked === true){
//                contador++;
//            }
//        }
//    }
//    if(contador === 0){
//        document.getElementById("faltaCheckbox").style.visibility = "visible";
//        return false;
//    }else{
//        document.getElementById("faltaCheckbox").style.visibility = "hidden";
//        return true;
//    }
//}
//
//function mostrarAsignaturasA(){
//    var asignaturasDAW1A1 = ["Sistemas informáticos", "Bases de datos","Programación","Lenguaje de marcas","Entornos de desarrollo","Formación y orientación laboral"];
//    var asignaturasDAW1A2 = ["SI", "BD","PROG","LMSGI","ED","FOL"];
//    
//    var asignaturasDAW2A1 = ["Desarrollo web en entorno cliente","Desarrollo web en entorno servidor","Despliegue de aplicaciones web","Diseño de interfaces web","Empresa"];
//    var asignaturasDAW2A2 = ["DWEC", "DWES","DAW","DIW","E"];
//    
//    var asignaturasSMR1A1 = ["Sistemas operativos monopuestos","Aplicaciones ofimáticas","Redes locales","Aplicaciones web","Formación y orientación laboral"];
//    var asignaturasSMR1A2 = ["SOM","AO","RL","AW","FOL"];
//    
//    var asignaturasSMR2A1 = ["Montaje y mantenimiento de equipos","Sistemas operativos en red","Seguridad informática","Servicion en red","Empresa e iniciativa emprendedora"];
//    var asignaturasSMR2A2 = ["MME","SOR","SI","SR","EIE"];
//    
//    var divAsignaturas = document.getElementById("asignaturasA")
//    var opcion;
//    var etiqueta;
//    var texto;
//    //borrar lo anterioro
//    while(divAsignaturas.hasChildNodes()){
//            divAsignaturas.removeChild(divAsignaturas.childNodes[0]);
//    }
//    if(cicloA.value !== "nada" && cursoA.value !== "nada"){
//        if(cicloA.value === "DAW"){
//            if(cursoA.value === "primeroA"){
//                for(var i = 0; i < asignaturasDAW1A1.length; i++){
//                    opcion = document.createElement("input");
//                    opcion.setAttribute("type","checkbox");
//                    opcion.setAttribute("name","DAW1A[" + asignaturasDAW1A2[i] + "]");
//                    opcion.setAttribute("id","DAW1A[" + asignaturasDAW1A2[i] + "]");
//                    opcion.setAttribute("class","CBDAW1");
//                    divAsignaturas.appendChild(opcion);
//
//                    etiqueta = document.createElement("label");
//                    etiqueta.setAttribute("for","DAW1A[" + asignaturasDAW1A2[i] + "]");
//
//                    texto = document.createTextNode(asignaturasDAW1A1[i]);
//                    etiqueta.appendChild(texto);
//
//                    divAsignaturas.appendChild(etiqueta);
//
//                    divAsignaturas.appendChild(document.createElement("br"));
//                }
//            }else{
//                for(var i = 0; i < asignaturasDAW2A1.length; i++){
//                    opcion = document.createElement("input");
//                    opcion.setAttribute("type","checkbox");
//                    opcion.setAttribute("name","DAW1A[" + asignaturasDAW2A2[i] + "]");
//                    opcion.setAttribute("id","DAW1A[" + asignaturasDAW2A2[i] + "]");
//                    opcion.setAttribute("class","CBDAW1");
//                    divAsignaturas.appendChild(opcion);
//
//                    etiqueta = document.createElement("label");
//                    etiqueta.setAttribute("for","DAW1A[" + asignaturasDAW2A2[i] + "]");
//
//                    texto = document.createTextNode(asignaturasDAW2A1[i]);
//                    etiqueta.appendChild(texto);
//
//                    divAsignaturas.appendChild(etiqueta);
//
//                    divAsignaturas.appendChild(document.createElement("br"));
//                }
//            }
//        }else{
//            if(cursoA.value === "primeroA"){
//                for(var i = 0; i < asignaturasSMR1A1.length; i++){
//                    opcion = document.createElement("input");
//                    opcion.setAttribute("type","checkbox");
//                    opcion.setAttribute("name","DAW1A[" + asignaturasSMR1A2[i] + "]");
//                    opcion.setAttribute("id","DAW1A[" + asignaturasSMR1A2[i] + "]");
//                    opcion.setAttribute("class","CBDAW1");
//                    divAsignaturas.appendChild(opcion);
//
//                    etiqueta = document.createElement("label");
//                    etiqueta.setAttribute("for","DAW1A[" + asignaturasSMR1A2[i] + "]");
//
//                    texto = document.createTextNode(asignaturasSMR1A1[i]);
//                    etiqueta.appendChild(texto);
//
//                    divAsignaturas.appendChild(etiqueta);
//
//                    divAsignaturas.appendChild(document.createElement("br"));
//                }
//            }else{
//                for(var i = 0; i < asignaturasSMR2A1.length; i++){
//                    opcion = document.createElement("input");
//                    opcion.setAttribute("type","checkbox");
//                    opcion.setAttribute("name","DAW1A[" + asignaturasSMR2A2[i] + "]");
//                    opcion.setAttribute("id","DAW1A[" + asignaturasSMR2A2[i] + "]");
//                    opcion.setAttribute("class","CBDAW1");
//                    divAsignaturas.appendChild(opcion);
//
//                    etiqueta = document.createElement("label");
//                    etiqueta.setAttribute("for","DAW1A[" + asignaturasSMR2A2[i] + "]");
//
//                    texto = document.createTextNode(asignaturasSMR2A1[i]);
//                    etiqueta.appendChild(texto);
//
//                    divAsignaturas.appendChild(etiqueta);
//
//                    divAsignaturas.appendChild(document.createElement("br"));
//                }
//            }
//        }
//    }
//}
//
//function mostrarAsignaturasP(){
//    var asignaturasDAW1A1 = ["Sistemas informáticos", "Bases de datos","Programación","Lenguaje de marcas","Entornos de desarrollo","Formación y orientación laboral"];
//    var asignaturasDAW1A2 = ["SI", "BD","PROG","LMSGI","ED","FOL"];
//    
//    var asignaturasDAW2A1 = ["Desarrollo web en entorno cliente","Desarrollo web en entorno servidor","Despliegue de aplicaciones web","Diseño de interfaces web","Empresa"];
//    var asignaturasDAW2A2 = ["DWEC", "DWES","DAW","DIW","E"];
//    
//    var asignaturasSMR1A1 = ["Sistemas operativos monopuestos","Aplicaciones ofimáticas","Redes locales","Aplicaciones web","Formación y orientación laboral"];
//    var asignaturasSMR1A2 = ["SOM","AO","RL","AW","FOL"];
//    
//    var asignaturasSMR2A1 = ["Montaje y mantenimiento de equipos","Sistemas operativos en red","Seguridad informática","Servicion en red","Empresa e iniciativa emprendedora"];
//    var asignaturasSMR2A2 = ["MME","SOR","SI","SR","EIE"];
//    
//    var divAsignaturas = document.getElementById("asignaturasP")
//    var selector;
//    var texto;
//    var option;
//    //borrar lo anterioro
//    while(divAsignaturas.hasChildNodes()){
//            divAsignaturas.removeChild(divAsignaturas.childNodes[0]);
//    }
//    if(cicloP.value !== "nada" && cursoP.value !== "nada"){
//        selector = document.createElement("select");
//        divAsignaturas.appendChild(selector);
//        if(cicloP.value === "DAW"){
//            if(cursoP.value === "primeroP"){
//                for(var i = 0; i < asignaturasDAW1A1.length; i++){
//                    option = document.createElement("option");
//                    option.setAttribute("value", asignaturasDAW1A2[i]);
//
//                    texto = document.createTextNode(asignaturasDAW1A1[i]);
//                    option.appendChild(texto);
//                    selector.appendChild(option);
//                }
//            }else{
//                for(var i = 0; i < asignaturasDAW2A1.length; i++){
//                    option = document.createElement("option");
//                    option.setAttribute("value", asignaturasDAW2A2[i]);
//
//                    texto = document.createTextNode(asignaturasDAW2A1[i]);
//                    option.appendChild(texto);
//                    selector.appendChild(option);
//                }
//            }
//        }else{
//            if(cursoP.value === "primeroP"){
//                for(var i = 0; i < asignaturasSMR1A1.length; i++){
//                    option = document.createElement("option");
//                    option.setAttribute("value", asignaturasSMR1A2[i]);
//
//                    texto = document.createTextNode(asignaturasSMR1A1[i]);
//                    option.appendChild(texto);
//                    selector.appendChild(option);
//                }
//            }else{
//                for(var i = 0; i < asignaturasSMR2A1.length; i++){
//                    option = document.createElement("option");
//                    option.setAttribute("value", asignaturasSMR2A2[i]);
//
//                    texto = document.createTextNode(asignaturasSMR2A1[i]);
//                    option.appendChild(texto);
//                    selector.appendChild(option);
//                }
//            }
//        }
//    }
//}
//function eComprobarSelect(){
//    if(asignaturasProf.hasChildNodes()){
//        document.getElementById("faltaSelect").style.visibility = "hidden";
//        return true;
//    }else{
//        document.getElementById("faltaSelect").style.visibility = "visible";
//        return false;
//    }
//}
//
//function activarEnviar(){
//    if(nombreA.value !== "" && apellidosA.value !=="" && dniA.value !=="" && emailA.value !=="" && mensajeA.value !=="" && lpdA.checked === true){
//        document.getElementById("enviarA").disabled = false;
//    }else{
//        document.getElementById("enviarA").disabled = true;
//    }
//    if(nombreP.value !== "" && apellidosP.value !=="" && dniP.value !=="" && emailP.value !=="" && mensajeP.value !=="" && lpdP.checked === true){
//        document.getElementById("enviarP").disabled = false;
//    }else{
//        document.getElementById("enviarP").disabled = true;
//    }
//}
})