var angel = {
    nombre: "Angel",
    apellido: "Sulbaran",
    altura: 1.7,
    cantidadLibros: 36,
  };
  
  var pepe = {
    nombre: "Pepe",
    apellido: "Trueno",
    altura: 1.9,
    cantidadLibros: 10,
  };
  
  var tom = {
    nombre: "Tom",
    apellido: "Holland",
    altura: 1.73,
    cantidadLibros: 127,
  };
  
  var marco = {
    nombre: "Marco",
    apellido: "Polo",
    altura: 1.75,
    cantidadLibros: 12,
  };
  var emma = {
    nombre: "Emma",
    apellido: "Stone",
    altura: 1.6,
    cantidadLibros: 43,
  };
  
  var robert = {
    nombre: "Robert",
    apellido: "Downey Jr.",
    altura: 1.74,
    cantidadLibros: 2,
  };
  
  var arnulfo = {
    nombre: "Arnulfo",
    apellido: "Cortez",
    altura: 2,
    cantidadLibros: 113,
  };
  
  const esAlta = ({ altura }) => altura >= 1.8;
  const esBaja = ({ altura }) => altura < 1.8;
  
  
  var personas = [ angel, pepe, tom, marco, robert, arnulfo];
  
  var personasAltas = personas.filter(esAlta);
  var pesonasBajas = personas.filter(esBaja);
  
  // transformas de mt a cms

  const pasarAlturaCms = persona => ({
    //aca se crea una nueva variable de persona, para que los demas datos no se modifiquen y queden en cms
        ...persona,
        altura: persona.altura * 100
    
  })
  var personasCms = personas.map(pasarAlturaCms);

  // contar la cantidad de libros que los usuaruios tienen:

//   var acum = 0;

//   for (var i = 0; i < personas.length; i++) {
//       acum = acum + personas[i].cantidadLibros;
//   }

//de otra forma: Reduce (Respecto a la cantidad de libros):

const reducer = (acum, { cantidadLibros }) => acum + cantidadLibros;

var totalLibros = personas.reduce(reducer, 0)
  
  console.log(personasAltas);
  console.log(pesonasBajas);
  console.log(personasCms);
  console.log(totalLibros);


