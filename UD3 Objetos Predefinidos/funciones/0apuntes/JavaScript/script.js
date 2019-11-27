function empezarFuncion(){
        //Funciones anidadas
        //Una función dentro de otra
    function hola(nombre){
        var saludo = nombre;
        function saludar(hola){
            return hola + saludo;
        }
        return saludar("Hola ");
    }
    console.log(hola("Pepe"));
    
        //Closure
    function empleado(cargo, salario){
        this.cargo = cargo;
        this.salario = salario;
        this.aumento = function(porcentaje){
            this.salario = salario * (1+porcentaje);
            return this.salario;
        };
    }
    var emp = new empleado("gerente", 100);
    emp.aumento(0.5);
    console.log(emp.salario);
    
        //Closure sin objetos
    function crearBase(x){
        return function(y){
            return Math.pow(x,y);
        };
    }
    var b6 = crearBase(6);
    console.log(b6(4));
    
        //Función flecha  =>
    var funcion = (x, y) => x+y;
    console.log(funcion(5, 4));
    
        //Funciones en otros archivos
    donde();  //Se van almacenando
    
    
        
}
