

function cambiarColor(){
    window.parent.document.body.style.color = "red";
}


function cargar(){
    var color = document.getElementById("color");
    
    color.addEventListener('click',cambiarColor,false);
}

window.addEventListener('load',cargar,false);
