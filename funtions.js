

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    return this //implicitamente se regresa esto, por lo que no hay que escribirlo.
}

Persona.prototype.saludar = function () {
    if (this.altura >= 1.8)
    {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto porque mido ${this.altura}`);
    } else {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo porque mido ${this.altura}`);
    }
}

var andres = new Persona('Andrés', 'Campuzano', '1.9');
var erika = new Persona('Erika', 'Fernandez', '1.7');
var arturo = new Persona('Arturo', 'Gomez', '1.6');


 andres.saludar();  
 erika.saludar(); 
 arturo.saludar(); 


 