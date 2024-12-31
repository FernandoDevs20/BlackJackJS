
function saludar( nombre ) {
    console.log(arguments);
    console.log('Hola '+ nombre);
    return 1;

    //esto nunca se va a ejecutar
    console.log('este codigo nunca se va a ejecutar');
}

const saludar2 = function ( nombre) {
     console.log('Hola '+ nombre);
}

const saludarFlecha = () =>{
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) =>{
    console.log('Hola '+ nombre);
    return
}

const retornoSaludar = saludar('Fernando',40,32,false);
// console.log(retornoSaludar);
// saludar2('Andrea');
// saludarFlecha();
// saludarFlecha2('Laya');

function sumar(a,b){
    return a+b;
}

const sumar2 = (a,b)=> {
    a+b
};

const sumar2r = (a,b) => a+b;

const getAleatorio = () => Math.random();

console.log( sumar2r(1,2));
console.log(getAleatorio());