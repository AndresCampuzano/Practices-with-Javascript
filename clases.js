function heredaDe(prototipoHijo, PrototipoPadre){
  var fn = function () {}
  fn.prototype = PrototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}


function Persona(nombre, apellido, altura) {
  this.nombre = nombre, 
  this.apellido = apellido,
  this.altura = altura
}

Persona.prototype.saludar = function () {
  if (this.altura > 1.8) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`);
  } else {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo`);
  }
};


function Desarrollador (nombre, apellido) {
  this.nombre = nombre,
  this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
  console.log (`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador JS 🎃`)
}

heredaDe(Desarrollador, Persona);

var andres = new Persona("Andres", "Campuzano", 1.9);
var joonhee = new Persona("Joonhe", "Kim", 1.7);

andres.saludar();
joonhee.saludar();
