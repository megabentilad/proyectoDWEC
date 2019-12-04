function enviarColor(){
    //window.opener.document.getElementsByTagName("body")[0].style.color = this.style.backgroundColor;     //Con esto es posible hacer el cambio directamente
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