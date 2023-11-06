let costosFijos;

do {
    costosFijos = prompt("Ingresa tus costos fijos : ");
    console.log(costosFijos);

    if(costosFijos == ""){
        alert("Completa la información");
    }

    if (isNaN(costosFijos)) {
        alert("tipo de dato incorrecto");
    }
    
} while (isNaN(costosFijos) || costosFijos == "");
