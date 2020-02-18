$(function (){
    var miXHR = new XMLHttpRequest();
    //Evento del botón
    function cambio(){
        console.log(this.readyState); //this es miXHR, que es quien llama a la función
        console.log(this.status);
        
        //Si la conexión ha terminado y es satisfactoria (respectivamente), procede
        if(this.readyState == 4 && this.status == 200){ 
                console.log(this.responseText);
                $("#respuesta").html(this.responseText);
        }
    }
    
    function conectar(){
        //Lo primero es que evaluar si tenemos instancia del objeto
   //     if(miXHR){
            /* // Para enviar por GET
            var url;
            url = "fecha.php?dia=" + $("#dia").val().trim();
            miXHR.open("GET",url,false);  //metodo, conexión con..., asíncrono
            miXHR.onreadystatechange = cambio;
            
            //Qué queremos enviar
            miXHR.send(null);
            */
           /*
           //Para enviar potr POST
            miXHR.open("POST", "fecha.php",true);
            miXHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            miXHR.onreadystatechange = cambio;
            console.log($("#dia").val().trim());
            miXHR.send("dia=" + $("#dia").val().trim());
            
            
        }else{
            alert("No existe el objeto de ayax :'/")
        }
        */
       
       //JQUERY POST 1
    //   $.ajax({url:'fecha.php',type:'Post',async:true,data:'dia=4',success:function(respuesta){alert(respuesta);}});
       
       //JQUERY POST 2
    //   $('#respuesta').load("fecha.php",{dia:5});
    //JQUERY POST 3
       $.post("fecha.php",{dia:6}, function(respuesta){
            alert(respuesta);
       });
    
    //JQUERY GET 1
//  //  $.get("fecha.php?dia=6", function(respuesta){
//        alert(respuesta);
//    });
    }
    
    $("#conectar").on("click",conectar);
    
    
    
});