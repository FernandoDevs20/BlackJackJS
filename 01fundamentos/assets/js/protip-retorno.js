
function crearPersona(nombre, apellido) {
    return { nombre,apellido }
}

const crearPersonaFlecha = ( nombre , apellido) => ({ nombre, apellido });

const persona = crearPersonaFlecha( 'Fernando', 'Rodriguez' );
console.log( persona );

function imprimeArgumentos(){
    console.log(arguments);
}

//los tres ... dicen que haga un arreglo con todos los argumentos
const imprimeArgumentos2 = ( edad,...args ) => {
    // console.log( {edad,args} );
    return args;
};

// imprimeArgumentos(10, true, false, 'Fernando', 'Rodrigeuz', 10,20);
const [casado, vivo, nombre, apellido,numero] =imprimeArgumentos2(10, true, false, 'Fernando', 'Rodrigeuz', 10,20);
console.log(argumentos);
