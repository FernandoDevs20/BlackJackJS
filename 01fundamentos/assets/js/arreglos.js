
const arr =  new Array(10);


let videoJuegos = ['Mario 3', 'Megaman', 'CallOfDutty'];

console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    ()=>{},
    {a: 1},
    ['X','Megaman','Doctor'],
];

console.log({arregloCosas});

let arregloPersonajes = arregloCosas[7];

console.log(arregloPersonajes[2]);
 
console.log(arregloCosas[7][2]);