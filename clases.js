class Persona {
  constructor (nombre, apellido, altura) {
    this.nombre = nombre, 
    this.apellido = apellido,
    this.altura = altura
  }
  saludar (fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
    if(fn) {
      fn(this.nombre, this.apellido)
    }
  }

  soyAlto () {
    return this.altura > 1.8;
  }
}


class Desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super (nombre, apellido, altura)
  }
  saludarDesarrollador(fn) {
    console.log (`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador JS 🎃`);
    if(fn) {
      fn(this.nombre, this.apellido, true)
    }
  }
}


function responderSaludo (nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if(esDev){
    console.log ('No sabia que eras desarrollador');
  }
}




var andres = new Persona("Andres", "Campuzano", 1.9);
var joonhee = new Persona("Joonhe", "Kim", 1.7);

var andres = new Desarrollador("Andres", "Campuzano", 1.9);
var joonhee = new Desarrollador("Joonhe", "Kim", 1.7);

andres.saludar();
joonhee.saludar();

andres.soyAlto();
joonhee.soyAlto();

andres.saludarDesarrollador(responderSaludo);
joonhee.saludarDesarrollador(responderSaludo);
