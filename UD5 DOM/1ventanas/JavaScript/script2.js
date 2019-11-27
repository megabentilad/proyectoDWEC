function enviarColor(){
    window.opener.postMessage(this.style.backgroundColor,'*');
    window.close();
}

function cargar(){
    var colores = document.getElementsByTagName("div");
    for(var i=0; i<colores.length; i++){
        colores[i].addEventListener('click',enviarColor,false);
    } 
    window.opener.postMessage('cargado','*');
}

window.addEventListener('load',cargar,false);