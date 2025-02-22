/*
    2C = Two of Clubs
    2D = Two of Diamonds
    2H = Two of Hearts
    2S = Two of Spades
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const crearDeck = ()=>{

    for( let i=2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i+tipo)
            
        }
    }

    for(let tipo of tipos){
        for(let especial of especiales){

            deck.push( especial + tipo );

        }
    }

    deck =  _.shuffle(deck);

    console.log(deck);

    return deck;
}

crearDeck();

//esta funcion me permite tomar una carta

const perdirCarta = () =>{

    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }

    let carta = deck.pop();

    return carta;
}

const valorCarta = (carta) =>{

    const valor = carta.substring(0, carta.length-1);

    return (isNaN( valor )) ?
            (valor === 'A')? 11 : 10
            : valor * 1;
}

//turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    do{
        const carta = perdirCarta();
        puntosComputadora = puntosComputadora +valorCarta(carta);

        puntosHTML[1].innerText = puntosComputadora;

        //CREAR E INSERTAR LA CARTA
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos < 21));

    setTimeout(() => {

        if( puntosComputadora === puntosMinimos){
            alert('Empate!');
        }else if(puntosMinimos > 21){
            alert('Computadora gana!');
        }else if(puntosComputadora > 21){
            alert('Jugador gana');
        }else{
            alert('Computadora gana!');
        }        
    }, 100);

}

const valor = valorCarta( perdirCarta() );
console.log(valor);


//eventos
btnPedir.addEventListener('click',() => {

    const carta = perdirCarta();
    puntosJugador = puntosJugador +valorCarta(carta);

    puntosHTML[0].innerText = puntosJugador;

    //CREAR E INSERTAR LA CARTA
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;


        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

});

btnNuevo.addEventListener('click', () => {

    console.clear();

    puntosComputadora = 0;
    puntosJugador = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});

