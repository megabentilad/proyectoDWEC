$(function (){
    /*FUNCIONES*/
    function crearDBLocal(){
        var abrirDB = window.indexedDB.open("asignaturas",1); //nombre y versión
        //si la operación tiene éxito, crea la base de datos o la abre si ya existe
        abrirDB.onsuccess = function(event){
            //si tiene éxito nos da acceso
            //tiene que ser una variable global
            bd = event.target.result;
        };
        abrirDB.onerror = function(event){
            console.log("No se ha poido acceder a la BD por: " + event.target.errorCode);
        };
        
        abrirDB.onupgradeneeded = function(event){
            bd = event.target.result;
            bd.createObjectStore("asignatura",{ keyPath: "id" });
        };
    }
    
    function accesoBDExterna(){
       $.post("conexionBD.php", function(respuesta){
            $(JSON.parse(respuesta)).each(function(){
                //Crear una transacción
                var transaccion = bd.transaction(["asignatura"],"readwrite");
                //Guardamos el objeto en el contenedor
                var contenedor = transaccion.objectStore("asignatura");
                contenedor.add({id:this['id'],nombre:this['nombre']});
            });
       });
       $('#mostrar').attr("disabled",false);
       $('#insertar').attr("disabled",false);
   }
   
   function menuInsertarAsignatura(){
       //muestro y oculto los "menus"
        $('#forminsert').css("display","block");
        $('#formmod').css("display","none");
        //vacio los campos
        $('#id').val("");
        $('#nombre').val("");
    }
    function insertarAsignatura(){
        //valido los campos
        var formato = /^[A-Z]{3}[\d]{2}$/g;
        $('#nombre').val($('#nombre').val().trim());
        formato = /^[A-Z]{3}[\d]{2}$/g;
        var validaCodigo = formato.test($('#id').val()); //Esto está poruqe está to loco el if de abajo
        if(!validaCodigo){ //Si no cumple el formato o el nombre está vacío, salta el alert
            alert('El formato del id debe ser AAA55 (tres letras mayúsculas y dos números).');
        }else if($('#nombre').val() == ""){
            alert("El nombre no puede estar vacío.");
        }else{
            var transaccion = bd.transaction(["asignatura"],"readwrite");
            //Guardamos el objeto en el contenedor
            var contenedor = transaccion.objectStore("asignatura");
            contenedor.add({id:$('#id').val(),nombre:$('#nombre').val()});
            $('#forminsert').css("display","none");
            leerTodoDB();
        }
        
    }
    function menuModificarAsignatura(){
        //muestro y oculto los "menus"
        $('#formmod').css("display","block");
        $('#forminsert').css("display","none");
        //vacio los campos
        $('#idm').val("");
        $('#nombrem').val("");
        //relleno los campos
        var transaccion = bd.transaction(["asignatura"],"readwrite");
        var contenedor = transaccion.objectStore("asignatura");
        var id = this.id.slice(-5); //Cojo solo el código, eliminando la parte de 'modificar' del id
        idActual = id;
        contenedor.get(id).onsuccess=function(event){
            var objeto = event.target.result;
            if(objeto !== "undefined"){
                $('#idm').val(objeto.id);
                $('#nombrem').val(objeto.nombre);
            }
        };
        
        
    }
    function modificarAsignatura(){
        //valido el campo
        $('#nombrem').val($('#nombrem').val().trim());
        if($('#nombrem').val() == ""){
            alert("El campo 'nombre' no puede estar vacío");
        }else{
            var transaccion = bd.transaction(["asignatura"],"readwrite");
            var contenedor = transaccion.objectStore("asignatura");
            var id = idActual; //Cojo solo el código, eliminando la parte de 'modificar' del id
            console.log(id);
            contenedor.get(id).onsuccess=function(event){
                var objeto = event.target.result;
                if(objeto !== "undefined"){
                  objeto.put($('#nombrem').val());
                }
                leerTodoDB();
            };
            idActual = "";
            $('#formmod').css("display","none");
        }
    }
    
    function eliminarAsignatura(){
        var transaccion = bd.transaction(["asignatura"],"readwrite");
        var contenedor = transaccion.objectStore("asignatura");
        var id = this.id.slice(-5); //Cojo solo el código, eliminando la parte de 'eliminar' del id
        console.log(id);
        contenedor.get(id).onsuccess=function(event){
            var objeto = event.target.result;
            if(objeto !== "undefined"){
              contenedor.delete(objeto.id);
            }

            leerTodoDB();
        };
    }
    function leerTodoDB(){
        $('tbody').empty();
        var transaccion = bd.transaction(["asignatura"],"readonly");
        var contenedor = transaccion.objectStore("asignatura");
        //consultar toda la tabla
        contenedor.openCursor().onsuccess = function(event){
            var cursor = event.target.result;
            if(cursor){
                var tbody = document.getElementsByTagName("tbody")[0];
                
                var tr = document.createElement("tr");
                
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.id));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.nombre));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.innerHTML = "<button id='modificar" + cursor.value.id +"'>Modificar</button>";
                tr.appendChild(td);
                var td = document.createElement("td");
                td.innerHTML = "<button id='eliminar" + cursor.value.id + "'>Eliminar</button>";
                tr.appendChild(td);
                tbody.appendChild(tr);
                $('#modificar' + cursor.value.id).on('click',menuModificarAsignatura);
                $('#eliminar' + cursor.value.id).on('click',eliminarAsignatura);
                cursor.continue();
            } 
        };
    }
   
   /*EVENTOS*/
    $('#conectar').on('click',accesoBDExterna); 
    $('#mostrar').on('click',leerTodoDB); 
    $('#insertar').on('click',menuInsertarAsignatura); 
    $('#binsert').on('click',insertarAsignatura);
    $('#bmod').on('click',modificarAsignatura);
   
    /*PROCESO*/
    var bd; //Creo el objeto (base de datos)
    var idActual; //Creo una variable global para mover el id entre funciones
    crearDBLocal(); //llamo a la función que crea la base de datos
    
    
    
    
});