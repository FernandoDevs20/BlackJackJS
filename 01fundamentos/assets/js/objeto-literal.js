let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo : false,
    edad: 40,
    coords :{
        lat: 34.034,
        lng: -188.70,
    },
    trajes : ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion : {
        zip : '58250',
        ubicacion : 'Malibu, California'
    },
}

console.log('Nombre: ', personaje.nombre);

console.log(personaje);

console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje['edad']);
console.log('Latitutd: ', personaje.coords.lat);
console.log('Numero de trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length-1]);

personaje.casado = true; 

const entriesPares = Object.entries( personaje );
console.log(entriesPares);

//bloqueo de las propiedades del objeto 
Object.freeze(personaje);

