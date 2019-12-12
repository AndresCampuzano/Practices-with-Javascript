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
  cantidad: 1,
  edad: 4,
  categoria: "perro"
};

var mascotas = [athenea, venus, mercurio, jupiter, imaginario];

console.log(`-------------------------------------------`);

//Muestra las mascotas sin filtrar datos, solo el nombre y edad
for (var i = 0; i < mascotas.length; i++) {
  var mascotaContador = mascotas[i];
  console.log(`${mascotaContador.nombre} tiene ${mascotaContador.edad} meses`);
}

console.log(`-------------------------------------------`);

const mascotaVieja = mascota => {
  return mascota.edad >= 10;
};
var esViejo = mascotas.filter(mascotaVieja);

const mascotaJoven = mascota => {
  return mascota.edad < 10;
};
var esJoven = mascotas.filter(mascotaJoven);

//Muestra las mascotas con el nomnre y la edad categorizados por vejez
for (var i = 0; i < esJoven.length; i++) {
  var mascotaContadorEdad = esJoven[i];
  console.log(
    `${mascotaContadorEdad.nombre} es joven porque tiene ${mascotaContadorEdad.edad} meses`
  );
}

for (var i = 0; i < esViejo.length; i++) {
  var mascotaContadorEdad = esViejo[i];
  console.log(
    `${mascotaContadorEdad.nombre} es viejo porque tiene ${mascotaContadorEdad.edad} meses`
  );
}

console.log(`-------------------------------------------`);

//Muestra las mascotas con la categoria: perros o hamsters

const X = mascotas => {
  return mascotas.categoria === "perro";
};
var esPerro = mascotas.filter(X);

const Y = mascotas => {
  return mascotas.categoria === "hamster";
};
var esHamster = mascotas.filter(Y);

//datos simples
console.log(esPerro);
console.log(esHamster);

//datos complejos
for (var i = 0; i < esPerro.length; i++) {
  var mascotaContadorCategoria = esPerro[i];
  console.log(`${mascotaContadorCategoria.nombre} es un perrito`);
}

for (var i = 0; i < esHamster.length; i++) {
  var mascotaContadorCategoria = esHamster[i];
  console.log(`${mascotaContadorCategoria.nombre} es un hamster`);
}

console.log(`-------------------------------------------`);

//contador de mascotas - Si funciona

var contador = 0;

for (var i = 0; i < mascotas.length; i++) {
  contador = contador + mascotas[i].cantidad;
}

console.log(`En total hay ${contador} mascotas`);

console.log(`-------------------------------------------`);

