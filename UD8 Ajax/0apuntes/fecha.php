<?php
//echo date("j/n/Y G:i:s");
$array = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
];
echo $array[$_REQUEST["dia"]-1];
