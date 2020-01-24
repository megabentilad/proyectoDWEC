
    var bd;
    function crearDB(){
        var abrirDB = window.indexedDB.open("departamentos",1); //nombre y versión
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
            bd.createObjectStore("departamento",{autoIncrement:true});
        };
    }
    
    function insertarDB(){
        //combrueba que los valores estén bien
        var contadorErrores = 0;
        var eCodigo = validarAlfabetico($('#codigo').val(),1,3,3);
        if(eCodigo !== null){
            $('#codigo').after("<div class='error'>" + eCodigo + "</div>");
            contadorErrores++;
        }
        var eDescripcion = validarAlfanumerico($('#descripcion').val(),1,1,145);
        if(eDescripcion !== null){
            $('#descripcion').after("<div class='error'>" + eDescripcion + "</div>");
            contadorErrores++;
        }
        var eVolumen = validarDecimal($('#volumen').val(),1,0,99999);
        if(eVolumen !== null){
            $('#volumen').after("<div class='error'>" + eVolumen + "</div>");
            contadorErrores++;
        }
        if(contadorErrores > 0){
            return false;
        }
        //insertar
      //Crear una transacción
        var transaccion = bd.transaction(["departamento"],"readwrite");
      //Guardamos el objeto en el contenedor
        var contenedor = transaccion.objectStore("departamento");
        contenedor.add({codDepartamento:$('#codigo').val(),descDepartamento:$('#descripcion').val(),volDepartamento:$('#volumen').val(), estadoDepartamento:"alta"});
        
        return true;
    }
    
    
    function leerTodoDB(){
        var transaccion = bd.transaction(["departamento"],"readonly");
        var contenedor = transaccion.objectStore("departamento");
        //consultar toda la table
        contenedor.openCursor().onsuccess = function(event){
            var cursor = event.target.result;
            if(cursor){
                var tbody = document.getElementsByTagName("tbody")[0];
                var tr = document.createElement("tr");
                
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.codDepartamento));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.descDepartamento));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.setAttribute("class","images");
                if(cursor.value.estadoDepartamento === "alta"){
                    td.appendChild("<img src='img/alta.png'>");
                    tr.appendChild(td);
                }else{
                    td.appendChild("<img src='img/baja.png'>");
                    tr.appendChild(td);
                }
                var td = document.createElement("td");
                td.appendChild("<a href='ejercicioDetalles'><img src='img/ver.png'></a>");
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild("<a href='ejercicioEditar'><img src='img/editar.png'></a>");
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild("<a href='ejercicioBorrar'><img src='img/borrar.png'></a>");
                tr.appendChild(td);
                
                tr.appendChild(td);
                tbody.appendChild(tr);
                cursor.continue();
            } 
        };
    }
    
    function borrarKeyDB(){
        var transaccion = bd.transaction(["colchones"],"readwrite");
        var contenedor = transaccion.objectStore("colchones");
        //consultar la tabla por key
        contenedor.get(1).onsuccess = function(event){
            var objeto = event.target.result;
            console.log(objeto);
            if(objeto !== "undefined"){
                contenedor.delete(1);
            }
            
        };
    }
    
    function crearIndiceDB(){
        var abrirDB = window.indexedDB.open("tienda",3); //nombre y versión
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
            bd.createObjectStore("colchonesIndice",{autoIncrement:true});
        };
    }
