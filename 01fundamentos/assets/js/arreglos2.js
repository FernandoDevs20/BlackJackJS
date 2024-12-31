let juegos =  ['zelda', 'MAria', 'Metroid', 'GTAV'];
console.log('largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log(primero);
console.log(ultimo);

juegos.forEach((elemento, inidice, arr) => {
    console.log({ elemento, inidice, arr});
})

juegos.push( 'F-Zero' );

console.log({juegos});

juegos.unshift('Minecraft');

console.log({juegos});

let juegosBorrado = juegos.pop();

console.log(juegosBorrado);

let pos = 1;

console.log(juegos);
let juegosborrados = juegos.splice( pos, 2);
console.log({juegosborrados, juegos});

let metroidIdex = juegos.indexOf('Minecraft');
console.log(metroidIdex);