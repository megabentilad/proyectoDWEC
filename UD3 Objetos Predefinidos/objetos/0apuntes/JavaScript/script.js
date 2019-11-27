function empezarFuncion(){
        //Definir un objeto
    var miPersona = new Object();
    miPersona.nomre = "Maru";
    miPersona.edad = 15;
    console.log(miPersona);
    
        //Basado en tipo personalizado
    function Persona(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    var persona = new Persona("Ignacio", 24);
    console.log(persona);
    
        //Declaración literal
    var personaLiteral = {
        nombre: "Alonso",
        edad: 18
    };
    console.log(personaLiteral);
    
        //Sacar datos
    console.log(persona.nombre);
    console.log(persona["nombre"]);
    
        //Declarar métodos
    var personaMetodica = new Object();
    personaMetodica.nomre = "Alex";
    personaMetodica.edad = 24;   
            //Metodo mostrar
    personaMetodica.mostrar = function(){
        console.log("Nombre: " + this.nomre + "\nEdad: " + this.edad);
    };
    personaMetodica.mostrar();
            //Metodo sumar edad
    personaMetodica.cumpleanos = function(){
        this.edad++;
    };
    personaMetodica.cumpleanos();
    personaMetodica.mostrar();
    
        //Ver propiedades de un objeto
    console.log(Object.getOwnPropertyNames(personaMetodica));
    
        //Herencia
        var senior = new Persona("Jose" ,43);
        Persona.prototype.trabaja;
        senior.trabaja = "Herrero";
        console.log(senior);
        
        var seniorito = new Persona("Jr", 12);
        Persona.prototype.estudia;
        seniorito.estudia = "ESO";
        console.log(seniorito);
        
        //CLASES
        class Boli{
            constructor(color, grosor, marca){
                this.color = color;
                this.grosor = grosor;
                this.marca = marca;
            }
        };
        var miBoli = new Boli("azul", 5, "bic");
        console.log(miBoli);
        
            //Clase anónima
        var lapiz = class{
            constructor(color, grosor, marca){
                this.color = color;
                this.grosor = grosor;
                this.marca = marca;
            }
        };
            console.log(new lapiz("negro", 5, "carbonín"));
            
            //Metodos estáticos
        class Rotulador{
            constructor(color, grosor, marca){
                this.color = color;
                this.grosor = grosor;
                this.marca = marca;
            }
            static rotuladoresVendidos(){
                return "unos pocos";
            }
        };
        console.log(Rotulador.rotuladoresVendidos());  
        
            //Herencia de clases
        class Nuevo extends Rotulador{
            constructor(color, grosor, marca, fabrica, precio){
                super(color, grosor, marca);
                this.fabrica = fabrica;
                this.precio = precio;
                
            }
        }    
        var rotuladorNuevo = new Nuevo("verde", 3, "Pilot", "Benavente", 3);
        console.log(rotuladorNuevo);
        
        class Viejo extends Rotulador{
            constructor(color, grosor, marca, años){
                super(color, grosor, marca);
                this.años = años;
                this.tinta = 1000;
                for(var i = 0; i < años; i++){
                    this.tinta -= (this.tinta *= 0.1);
                }
            }
            desgaste(){
                this.años ++;
                this.tinta -= (this.tinta *= 0.1);
            }
        } 
        
        var rotuladorViejo = new Viejo("Azul", 3, "Bic", 5);
        console.log(rotuladorViejo);
        
        rotuladorViejo.desgaste();
        console.log(rotuladorViejo);
        
}
