var andres = {
    nombre: 'Andrés',
    apellido: 'Campuzano',
    edad: 20,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: true 
}

var camila = {
    nombre: 'Camila',
    edad: 17
}

function imprimirProfesion (persona) {
    console.log(`${persona.nombre} es:`);
    
    // persona.ingeniero === true
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    if (persona.cocinero) {
        console.log('Cocinero');
    }
    if (persona.cantante) {
        console.log('Cantante');
    }
    if (persona.dj) {
        console.log('Dj');
    }
    if (persona.guitarrista) {
        console.log('Guitarrista 🎸');
    }
    if (persona.drone) {
        console.log('Vuela drone ✈');
    }

}


const MAYORIA_DE_EDAD = 18;


// A una variable se le puede asignar una función.
// esto es una funcion con arrows
const  esMayorEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


function imprimirMayorEdad (persona) {
    if (esMayorEdad (persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitirAcceso (persona) {
    if (!esMayorEdad(persona)) {
        console.log('ACCESO DENEGADO');
    } else {
        console.log('ACCESO CONCEBIDO');
    }
}


imprimirProfesion (andres);
imprimirMayorEdad (andres);
imprimirMayorEdad (camila);
