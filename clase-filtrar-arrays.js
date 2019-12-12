var angel = {
  nombre: "Angel",
  apellido: "Sulbaran",
  altura: 1.7
};

var pepe = {
  nombre: "Pepe",
  apellido: "Trueno",
  altura: 1.9
};

var tom = {
  nombre: "Tom",
  apellido: "Holland",
  altura: 1.73
};

var marco = {
  nombre: "Marco",
  apellido: "Polo",
  altura: 1.75
};
var emma = {
  nombre: "Emma",
  apellido: "Stone",
  altura: 1.6
};

var robert = {
  nombre: "Robert",
  apellido: "Downey Jr.",
  altura: 1.74
};

var arnulfo = {
  nombre: "Arnulfo",
  apellido: "Cortez",
  altura: 2
};

const esAlta = ({ altura }) => altura >= 1.8;
const esBaja = ({ altura }) => altura < 1.8;


var personas = [ angel, pepe, tom, marco, robert, arnulfo];

var personasAltas = personas.filter(esAlta);
var pesonasBajas = personas.filter(esBaja);



console.log(personasAltas);
console.log(pesonasBajas);