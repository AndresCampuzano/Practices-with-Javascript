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

var andres = new Persona("Andres", "Campuzano", 1.9);
var joonhee = new Persona("Joonhe", "Kim", 1.7);

andres.saludar();
joonhee.saludar();
