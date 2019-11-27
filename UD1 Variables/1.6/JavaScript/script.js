function empezarFuncion(){

        //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var aH = document.getElementById("a");
    var bH = document.getElementById("b");
    var cH = document.getElementById("c");
    var dH = document.getElementById("d");
    var eH = document.getElementById("e");
    var fH = document.getElementById("f");
    var gH = document.getElementById("g");
    var hH = document.getElementById("h");
    var iH = document.getElementById("i");
    var jH = document.getElementById("j");

        //CAlCULAR DIAS, HORAS, MINUTOS Y SEGUNDOS
    var a1 = (null==undefined);
    var a2 = (null===undefined);
    
    var b1 = ("NaN"==3);
    var b2 = (null===undefined);
    
    var c1 = (null==undefined);
    var c2 = (null===undefined);
    
    var d1 = (null==undefined);
    var d2 = (null===undefined);
    
    var e1 = (false == 0);
    var e2 = (false === 0);
    
    var f1 = (true == 1);
    var f2 = (true === 1);
    
    var g1 = (undefined == false);
    var g2 = (undefined === false);
    
    var h1 = (null == 0);
    var h2 = (null === 0);
    
    var i1 = ("5" == 5);
    var i2 = ("5" === 5);
    
    var j1 = ("123" == 123);
    var j2 = ("123" === 123);
    
    
    //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    aH.innerHTML = "Null - undefined    == " + a1 + "      |||    === " +a2;
    bH.innerHTML = "'NaN' - NaN         == " + b1 + "      |||    === " +b2;
    cH.innerHTML = "5 - NaN             == " + c1 + "      |||    === " +c2;
    dH.innerHTML = "NaN - NaN           == " + d1 + "      |||    === " +d2;
    eH.innerHTML = "False - 0           == " + e1 + "      |||    === " +e2;
    fH.innerHTML = "True - 1            == " + f1 + "      |||    === " +f2;
    gH.innerHTML = "Undefined - false   == " + g1 + "      |||    === " +g2;
    hH.innerHTML = "Null - 0            == " + h1 + "      |||    === " +h2;
    iH.innerHTML = "'5' - 5             == " + i1 + "      |||    === " +i2;
    jH.innerHTML = "'123' - 123         == " + j1 + "      |||    === " +j2;

}