var andres = {
    nombre: 'Andrés',
    apellido: 'Campuzano',
    edad: '20',
    peso: 75
}


console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`);

// const aumentaPeso = (persona, incremento) => {
//     persona.peso += 200;
// }

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentaPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random () < 0.3;
const realizaDeporte = () => Math.random () < 0.4;

const META = andres.peso - 3; //kg
var dias = 0;

while (andres.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentaPeso(andres);
    }
    if (realizaDeporte()) {
        adelgazar(andres);
    }
    dias += 1; //incrementamos en 1 la cantidad de dias.
}

console.log(`Pasaron ${dias} días hasta que ${andres.nombre} adelgazó 3 kg`);
