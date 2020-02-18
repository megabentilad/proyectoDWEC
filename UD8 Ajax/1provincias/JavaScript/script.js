$(function (){
    var miXHR = new XMLHttpRequest();
    //Evento del botón
    function cambio(){
        //Si la conexión ha terminado y es satisfactoria (respectivamente), procede
        if(this.readyState == 4 && this.status == 200){ 
            console.log(this.responseText);
                $("#respuesta").text(this.responseText);
        }
    }
    
    function enviar(){
        //Lo primero es que evaluar si tenemos instancia del objeto
        if(miXHR){
           //Para enviar potr POST
            miXHR.open("POST", "provincias.php",true); //asincrono
            miXHR.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            miXHR.onreadystatechange = cambio;
            miXHR.send(null);
            
            
        }else{
            alert("No existe el objeto de ayax :'/")
        }
        
       
            
    }
    
    $("#conectar").on("click",enviar);
    
    
    
});