function empezarFuncion(){
        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var panastasiaH = document.getElementById("pAnastasia");    
    var ppasifloroH = document.getElementById("pPasifloro");    
    var pjeribertoH = document.getElementById("pJeriberto");
    var probustianaH = document.getElementById("pRobustiana");
    
        //DESARROLLO DEL PROGRAMA
        //Creación de la clase
    class Rectangulo{
        constructor(alto, largo, color){
            this.alto = alto;
            this.largo = largo;
            this.color = color;
        }
        mostrar(id){
            document.getElementById(id).innerHTML = "Alto: " + this.alto + "px Largo: " + this.largo + "px Color: " + this.color;
        }
        asignarAId(id){
            document.getElementById(id).style.width = this.largo + "px";
            document.getElementById(id).style.height = this.alto + "px";
            document.getElementById(id).style.backgroundColor = this.color;
        }
    }
        
        //Creación de objetos
        var anastasia = new Rectangulo(parseInt(Math.random() * (200 - 10) + 10), parseInt(Math.random() * (200 - 10) + 10), "rgb(" + parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + ")");
        var pasifloro = new Rectangulo(parseInt(Math.random() * (200 - 10) + 10), parseInt(Math.random() * (200 - 10) + 10), "rgb(" + parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + ")");
        var jeriberto = new Rectangulo(parseInt(Math.random() * (200 - 10) + 10), parseInt(Math.random() * (200 - 10) + 10), "rgb(" + parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + ")");
        var robustiana = new Rectangulo(parseInt(Math.random() * (200 - 10) + 10), parseInt(Math.random() * (200 - 10) + 10), "rgb(" + parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + ")");
        
        //Aplicación al HTML
        anastasia.asignarAId("Anastasia");
        anastasia.mostrar("pAnastasia");
        
        pasifloro.asignarAId("Pasifloro");
        pasifloro.mostrar("pPasifloro");
        
        jeriberto.asignarAId("Jeriberto");
        jeriberto.mostrar("pJeriberto");
        
        robustiana.asignarAId("Robustiana");
        robustiana.mostrar("pRobustiana");
     
}
