<?php
    $asignaturasDAW1A1 = ["Sistemas informáticos", "Bases de datos","Programación","Lenguaje de marcas","Entornos de desarrollo","Formación y orientación laboral"];
    $asignaturasDAW1A2 = ["SI", "BD","PROG","LMSGI","ED","FOL"];
    
    $asignaturasDAW2A1 = ["Desarrollo web en entorno cliente","Desarrollo web en entorno servidor","Despliegue de aplicaciones web","Diseño de interfaces web","Empresa"];
    $asignaturasDAW2A2 = ["DWEC", "DWES","DAW","DIW","E"];
    
    $asignaturasSMR1A1 = ["Sistemas operativos monopuestos","Aplicaciones ofimáticas","Redes locales","Aplicaciones web","Formación y orientación laboral"];
    $asignaturasSMR1A2 = ["SOM","AO","RL","AW","FOL"];
    
    $asignaturasSMR2A1 = ["Montaje y mantenimiento de equipos","Sistemas operativos en red","Seguridad informática","Servicion en red","Empresa e iniciativa emprendedora"];
    $asignaturasSMR2A2 = ["MME","SOR","SI","SR","EIE"];
    
    $aAsignaturas[] = array(
        "asignaturasDAW1A1" => $asignaturasDAW1A1,
        "asignaturasDAW1A2" => $asignaturasDAW1A2,
        
        "asignaturasDAW2A1" => $asignaturasDAW2A1,
        "asignaturasDAW2A2" => $asignaturasDAW2A2,
        
        "asignaturasSMR1A1" => $asignaturasSMR1A1,
        "asignaturasSMR1A2" => $asignaturasSMR1A2,
        
        "asignaturasSMR2A1" => $asignaturasSMR2A1,
        "asignaturasSMR2A2" => $asignaturasSMR2A2
    );
    
    echo json_encode($aAsignaturas);