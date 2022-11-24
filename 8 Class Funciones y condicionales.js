function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if (suscripcion == 'Basic') {
        console.log('puedes tomar casi todos los cursos durante un mes');
        return;
    }
    if (suscripcion == 'Expert') {
        console.log('Puedes tomar casi todos los cursos durante un año');
        return;
    }
    if (suscripcion == 'ExpertDuo') {
        console.log('Tu y alguien mas pueden tomar todos los cursos de platzi')
        return;
    }
    console.warn('La suscripcion no existe')
}

conseguirTipoSuscripcion('Free');
conseguirTipoSuscripcion('Basic');
conseguirTipoSuscripcion('Expert');
conseguirTipoSuscripcion('ExpertDuo');
console.log(' ')

//OTRO METODO PAR REDUCIR CONDICIONALES ES CREAR OBKETOS
const tipoSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Solo puedes tomar los cursos gratis",
    Expert: 'puedes tomar casi todos los cursos durante un mes',
    ExpertDuo: 'Puedes tomar casi todos los cursos durante un año',

}

function conseguirSuscripcion(suscripcion){
    if(tipoSuscripciones[suscripcion]){
        console.log(tipoSuscripciones[suscripcion]);
        return;
    }
    console.warn('no existe')
}

conseguirSuscripcion('free');
