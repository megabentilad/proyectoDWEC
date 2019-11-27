function recibirMensaje(){
    console.log(event.data);
    console.log(event.origin);
}

function pasarReceta(){
    console.log(this);
    window.opener.postMessage('<li>' + this.innerHTML + '</li>','*');
}


function cargar(){
    console.log(window.opener);
    console.log(window.opener.location.pathname);
    window.addEventListener('message',recibirMensaje,false);
    var receta = document.getElementsByTagName("li");
    
    receta[0].addEventListener('click',pasarReceta,false);
    receta[1].addEventListener('click',pasarReceta,false);
    receta[2].addEventListener('click',pasarReceta,false);
}

window.addEventListener('load',cargar,false);
