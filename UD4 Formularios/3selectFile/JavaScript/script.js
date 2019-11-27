function empezarFuncion(){
    var curso = ["Primer curso","Segundo curso"];
    var sel = document.getElementById("select1");
    var option = document.createElement("option");
    option.value = ("0");
    option.text = ("Seleccione un curso");
    sel.add(option);
    for(var value in curso){
       option = document.createElement("option");
       option.value = (value+1);
       option.text = (curso[value]);
       sel.add(option);
    }
}
function validar1(){
    var fecha = new Date(document.getElementById("fecha").value);
    console.log(fecha.getTime());
    var bien = true;
    if(document.getElementById("select1").selectedIndex === 0){
        bien = false;
        alert("Escoja un curso");
    }else{
        if(document.getElementById("select1").selectedIndex === 1){
            var asignaturas = ["PROG", "FOL", "SISTEMAS"];
            var h = document.getElementById("h2");
            h.textContent = "Selector de asignatura";
            var select = document.getElementById("select2");
            var option = document.createElement("option");
            option.value = ("0");
            option.text = ("Seleccione una asignatura");
            select.add(option);
            for(var value in asignaturas){
                option = document.createElement("option");
                option.value = (parseInt(value)+1);
                option.text = (asignaturas[value]);
                select.add(option);
             }
        }else{
            var asignaturas = ["DWES", "DWEC", "DAW"];
            var h = document.getElementById("h2");
            h.textContent = ("Selector de asignatura");
            var select = document.getElementById("select2");
            var option = document.createElement("option");
            option.value = ("0");
            option.text = ("Seleccione una asignatura");
            select.add(option);
            for(var value in asignaturas){
                option = document.createElement("option");
                option.value = (parseInt(value)+1);
                option.text = (asignaturas[value]);
                select.add(option);
             }
        }
    }
    
    return false;
}
function validar2(){
    var files = document.getElementById("archivos");
    console.log(files.value);
    return false;
}
