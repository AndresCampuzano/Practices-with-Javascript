class Persona {
  constructor (nombre, apellido, altura) {
    this.nombre = nombre, 
    this.apellido = apellido,
    this.altura = altura
  }
  saludar () {
    if (this.altura > 1.8) {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`);
    } else {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo`);
    }
  }
}


class Desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super (nombre, apellido, altura)
  }
  saludarDesarrollador() {
    console.log (`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador JS 🎃`)
  }
}

var andres = new Persona("Andres", "Campuzano", 1.9);
var joonhee = new Persona("Joonhe", "Kim", 1.7);

var andres = new Desarrollador("Andres", "Campuzano", 1.9);
var joonhee = new Desarrollador("Joonhe", "Kim", 1.7);

andres.saludar();
joonhee.saludar();

andres.saludarDesarrollador();
joonhee.saludarDesarrollador();
