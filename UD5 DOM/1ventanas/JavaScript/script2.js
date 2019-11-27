function enviarColor(){
    if(event.data === "letras"){
        console.log(window.opener.document);
        window.opener.document.body.style.color = this.style.backgroundColor;
        
    }else{
        
    }
    //window.close();
}

function cargar(){
    var colores = document.getElementsByTagName("div");
    for(var i=0; i<colores.length; i++){
        colores[i].addEventListener('click',enviarColor,false);
    } 
}

window.addEventListener('load',cargar,false);