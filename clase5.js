
var Andrés = {
    nombre: 'Andrés',
    apellido: 'Campuzano',
    edad: 28
}

var Francisca = {
    nombre: 'Francisca',
    apellido: 'Cano',
    edad: 26
}

function imprimirNombreMayusculas(persona) { 
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreMayusculas(Andrés);
imprimirNombreMayusculas(Francisca);
imprimirNombreMayusculas({ nombre: 'Pepito'});
// imprimirNombreMayusculas({ apellido: 'Gomez'});




// var nombre1 = 'Andrés2', edad1= 20;
// var nombre2 = 'Natalia2', edad2 = 22;


// function imprimirNombreYEdad () {
//     console.log(`Hola me llamo ${nombre1} y tengo ${edad1} años`);
//     console.log(`Hola me llamo ${nombre2} y tengo ${edad2} años`);

// }

// imprimirNombreYEdad();

// https://platzi.com/clases/1339-fundamentos-javascript/12894-parametros-como-referencia-o-como-val-7/

function cumpleanos (persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}




