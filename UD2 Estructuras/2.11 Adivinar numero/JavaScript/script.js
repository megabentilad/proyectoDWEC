function empezarFuncion(){

        //Mensajes de presentación
        alert('Lo siento. Meper donas?')
        alert('Si alguna ves te ise dño, t pido dsculpas....')
        alert('Lo siento');
    alert('Vamos a jugar a un juego. Tu piensa un número del 1 al 100 y yo lo adivino');
    alert('¿Lista?');
    
//CREAMOS VARIABLES Y OPERAMOS EN GENERAL
    var numero = 50;
    var intentos = 1;
    var maximo = 101;
    var minimo = 0;
    var aux;
    if(!confirm('¿Tu número es el ' + numero + '?')){
        do{ 
        intentos++;
        if (confirm('¿Tu número es mayor (aceptar) o menor (cancelar) que ' + numero + '?')){
                minimo = numero;
                numero += parseInt((maximo - numero) / 2);
        }else{
            maximo = numero;
            numero -= parseInt((numero - minimo) / 2);
        }
        }while(!confirm('¿Tu número es el ' + numero + '?'));
    }
    alert('Yaiiiiii, acerté. Y solo en unos míseros ' + intentos + ' intentos :D');
}
