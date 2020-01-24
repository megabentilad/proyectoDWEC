function cargar(){
    //escribimos una cookie
    //tiempo por defecto = Sesion
    //path por defecto = carpeta del archivo
    document.cookie="sitios=daw01sitios";
    
    //carpeta raiz
    document.cookie="sitios1=daw01sitios1;path=/";
    
    //expira dentro de un año
    //formato UTC
    var fecha = new Date();
    fecha.setTime(fecha.getTime()+300000);
    document.cookie="sitios2=daw01sitios2;expires="+fecha+";path=/";
    
    
    //leer cookies
    //aparecen todas las galletas
    console.log(document.cookie);
    
    //seleccionar solo una galleta. y coguiendo solo el valor
    var valorBuscado = "sitios";
    var galletas = document.cookie.split("; ");
    galletas.forEach(function(value){
       if(value.split("=")[0]==valorBuscado){
            console.log(value.split("=")[1]);
       } 
    });
    
    //borrar una cookie
    var fechaBorrar = new Date();
    fechaBorrar.setTime(0)
    document.cookie="sitios=daw01sitios;expires="+fechaBorrar;
    
    //Galleta creada con la librería externa chachi UuU
    
    Cookies.set('wolas', 'soy una galleta que dice wolas', {expires: 7});
    console.log(Cookies.get('wolas'));
    
    //Galleta creada con jquery (necesita la librería de jqgalletas)
    $(function (){
        $.cookie("jgalleta", "Soy una jgalleta :D",{expires: 1/24/12});
        console.log($.cookie("jgalleta"));
    
    
        //Eliminar la galleta
        $.removeCookie('jqgalleta');
        
    });
        
        
        
        //Cosas de almacenamiento interno
        
        
        
        
        
        //SQL propio del navegador (MALO)
//    function crearBD(){
//        //crear base de datos
//        mibbdd = openDatabase("colchones","1.0","base de datos de mi nachito chingón",1024*1024);
//        console.log(mibbdd);
//        
//        //creamos una tabla
//        mibbdd.transaction(function(sql){
//            console.log(sql);
//            sql.executeSql("CREATE TABLE colchon (id, marca, ancho, largo, material)");
//        });
//        
//        document.getElementById("insertar").style.visibility = "visible";
//    }
//    
//    function insertarBD(){
//        var id = document.getElementById("id").value;
//        var marca = document.getElementById("marca").value;
//        var ancho = document.getElementById("ancho").value;
//        var largo = document.getElementById("largo").value;
//        var material = document.getElementById("material").value;
//        
//        //insertar
//        mibbdd = openDatabase("colchones","1.0","base de datos de mi nachito chingón",1024*1024);
//        mibbdd.transaction(function(sql){
//         //   sql.executeSql('INSERT INTO colchon (id, marca, ancho, largo, material) VALUES("'+id+'","'+marca+'","'+ancho+'","'+largo+'","'+material+'")');
//          //  sql.executeSql("INSERT INTO colchon (id, marca, ancho, largo, material) VALUES('"+id+"','"+marca+"','"+ancho+"','"+largo+"','"+material+"')");
//            sql.executeSql("INSERT INTO colchon (id, marca, ancho, largo, material) VALUES (?,?,?,?,?)",[id,marca,ancho,largo,material]);
//        });
//    }
//    
//    
//    var crear = document.getElementById("crear");
//    crear.addEventListener("click",crearBD,false);
//    
//    var insertar = document.getElementById("insertar");
//    insertar.addEventListener("click",insertarBD,false);
//    
//    
//    //Para leer
//    function leerBD(){
//        mibbdd = openDatabase("colchones","1.0","base de datos de mi nachito chingón",1024*1024);
//        mibbdd.transaction(function(sql){
//           sql.executeSql("SELECT * FROM colchon",[],function(sql,resulSet){
//               for(i=0;i<resulSet.rows.length;i++){
//                    console.log("cosas "+i);
//               }
//           }) 
//        });
//    }
    
    
    
    //SQL propio del navegador (Bueno) UuU
    var bd;
    function crearDB(){
        var abrirDB = window.indexedDB.open("tienda",1); //nombre y versión
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
             bd.createObjectStore("colchones",{autoIncrement:true});
        };
       document.getElementById("insertar").style.visibility = "visible";
       document.getElementById("leerPorClave").style.visibility = "visible";
       document.getElementById("leerTodo").style.visibility = "visible";
       document.getElementById("tabla").style.visibility = "visible";
       document.getElementById("borrar").style.visibility = "visible";
       document.getElementById("indice").style.visibility = "visible";
    }
    
    function crearDB2(){
        var abrirDB = window.indexedDB.open("tienda",2); //nombre y versión
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
            bd.createObjectStore("colchones2",{keyPath : 'id'});
        };
    }
    
    
    function insertarDB(){
        var pid = document.getElementById("id").value;
        var pmarca = document.getElementById("marca").value;
        var pancho = document.getElementById("ancho").value;
        var plargo = document.getElementById("largo").value;
        var pmaterial = document.getElementById("material").value;
        
        //insertar
      //Crear una transacción
        var transaccion = bd.transaction(["colchones"],"readwrite");
      //Guardamos el objeto en el contenedor
        var contenedor = transaccion.objectStore("colchones");
        contenedor.add({id:pid,marca:pmarca,ancho:pancho,largo:plargo,material:pmaterial});
        
        //TABLA 2
        //Crear una transacción
        var transaccion2 = bd.transaction(["colchones2"],"readwrite");
      //Guardamos el objeto en el contenedor
        var contenedor2 = transaccion2.objectStore("colchones2");
        contenedor2.add({id:pid,marca:pmarca,ancho:pancho,largo:plargo,material:pmaterial});
    }
    
    function leerKeyDB(){
        var transaccion = bd.transaction(["colchones"],"readonly");
        var contenedor = transaccion.objectStore("colchones");
        //consultar la tabla por key
        contenedor.get(1).onsuccess = function(event){
            var objeto = event.target.result;
            console.log(objeto);
        };
        
        
        var transaccion2 = bd.transaction(["colchones2"],"readonly");
        var contenedor2 = transaccion2.objectStore("colchones2");
        //consultar la tabla por key
        contenedor2.get(1).onsuccess = function(event){
            var objeto = event.target.result;
            console.log(objeto);
        };
    }
    
    function leerTodoDB(){
        var transaccion = bd.transaction(["colchones"],"readonly");
        var contenedor = transaccion.objectStore("colchones");
        //consultar toda la table
        contenedor.openCursor().onsuccess = function(event){
            var cursor = event.target.result;
            if(cursor){
                var tbody = document.getElementsByTagName("tbody")[0];
                var tr = document.createElement("tr");
                
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.id));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.marca));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.ancho));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.largo));
                tr.appendChild(td);
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(cursor.value.material));
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
    
    
    var crear = document.getElementById("crear");
    crear.addEventListener("click",crearDB,false);
    crear.addEventListener("click",crearDB2,false);
    
    var insertar = document.getElementById("insertar");
    insertar.addEventListener("click",insertarDB,false);
    
    var leerPorClave = document.getElementById("leerPorClave");
    leerPorClave.addEventListener("click",leerKeyDB,false);
    
    var leerTodo = document.getElementById("leerTodo");
    leerTodo.addEventListener("click",leerTodoDB,false);
    
    var borrar = document.getElementById("borrar");
    borrar.addEventListener("click",borrarKeyDB,false);
    
    var indice = document.getElementById("indice");
    indice.addEventListener("click",crearIndiceDB,false);
    
}



window.addEventListener('load',cargar,false);