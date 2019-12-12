var andres = {
    nombre: 'Andres',
    edad: 20,
};

var joonhee = {
    nombre: 'Joonhee',
    edad: 17,
};

const esMayorEdad = function (persona) {
   return persona.edad >= 18;
}

// la de arriba y la de abajo son iguales, una es funcion con variable y la otra de abajo es arrow function.

const esMenorEdad = ({ edad }) => !esMayorEdad(edad);



function ImprimirMayorEdad (persona) {
    if (esMayorEdad (persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} NO es mayor de edad`)
    }
}

function permitirAcceso (persona) {
    if (!esMayorEdad(persona)) {
        console.log('Acceso denegado')
    } else {
        console.log('Acceso concebido')
    }
}