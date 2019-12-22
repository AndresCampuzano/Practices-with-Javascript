var athenea = {
    nombre: "Athenea",
    cantidad: 1,
    edad: 5,
    categoria: "perro"
  };
  
  var venus = {
    nombre: "Venus",
    cantidad: 1,
    edad: 9,
    categoria: "hamster"
  };
  
  var mercurio = {
    nombre: "Mercurio",
    cantidad: 1,
    edad: 16,
    categoria: "hamster"
  };
  
  var jupiter = {
    nombre: "Jupiter",
    cantidad: 1,
    edad: 10,
    categoria: "hamster"
  };
  
  var imaginario = {
    nombre: "Imaginario",
    cantidad: 2, //<  <------------
    edad: 4,
    categoria: "perro"
  };

  const personas = [ athenea, venus, mercurio, jupiter, imaginario ];

  const XXX = (acum, { cantidad }) => acum + cantidad;

  const totalmascotas = personas.reduce(XXX, 0)
  
  console.log(totalmascotas); // 5