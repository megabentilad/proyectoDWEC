
function leerIframe2(){
    window.parent.leerIframe();
}
function cargar(){
    var iframeLeer = document.getElementById("iframeLeer");
    
    iframeLeer.addEventListener('click',leerIframe2,false);
}

window.addEventListener('load',cargar,false);
