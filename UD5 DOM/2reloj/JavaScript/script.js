function accion(){
    var digital = document.getElementById("digital");
    var grados = document.getElementById("grados");
    var aguja = document.getElementById("marco");
    if(this.innerHTML === "Empezar"){
        var centisegundos = 0; 
        left = 5/9/2;
        top = 0;
        cronometro = setInterval(function(){
            if(parseInt(centisegundos/100/60%60) < 10){
                digital.innerHTML = parseInt(centisegundos/100/3600) + " : 0";
            }else{
                digital.innerHTML = parseInt(centisegundos/100/3600) + " : ";
            }
            
            if(parseInt(centisegundos/100%60) < 10){
                digital.innerHTML += parseInt(centisegundos/100/60%60) + " : 0";
            }else{
                digital.innerHTML += parseInt(centisegundos/100/60%60) + " : ";
            }
            
            if(centisegundos%100 < 10){
                digital.innerHTML += parseInt(centisegundos/100%60) + " : 0" + centisegundos%100;
            }else{
                digital.innerHTML += parseInt(centisegundos/100%60) + " : " + centisegundos%100;
            }
            grados.innerHTML = "grados: " + parseInt(centisegundos*0.06%360);
            
            //0.27777777
            
           // 25/90/18
//            if(centisegundos*0.06%360 < 90){
//                top += (5/9/2/3000);
//            }
//            if(centisegundos*0.06%360 >= 90 && centisegundos*0.06%360 < 180){
//                left -= (5/9/2/3000);
//            }
//            if(centisegundos*0.06%360 >= 180 && centisegundos*0.06%360 < 270){
//                top -= (5/9/2/3000);
//            }
//            if(centisegundos*0.06%360 >= 270){
//                left += (5/9/2/3000);
//            }

            
            aguja.style.transform = "rotateZ(" + centisegundos*0.06%360 + "deg)";
//            aguja.style.left = centisegundos*0.06%360*left+50 + "%";
//            aguja.style.top = centisegundos*0.06%360*top + "%";
            
            centisegundos++;
        },10); //milisegundos
        this.innerHTML = "Parar";
    }else{
        clearInterval(cronometro);
        this.innerHTML = "Empezar";
    }
}

function cargar(){
    var boton = document.getElementById("boton");
    boton.addEventListener('click', accion,false);
}

window.addEventListener('load',cargar,false);
