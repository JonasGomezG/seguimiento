/*
    1. mover casillas
    2. que hago con los limites
    3. colision entre los 2 jugadores
    4. que hago cuando gano
    5. boton reinicio de nueva funcion de inicio
    6. contadores con la puntuacion de cada usuario
    7. eliminar evento de teclado cuando hay un ganador
    8. css bien
    9. opcional, contador de tiempo para que empieze el juego
    10. no errores en la consola
*/


let main = document.getElementsByTagName('main')[0];
let body = document.getElementsByTagName('body')[0];
let input = document.createElement('input');
input.setAttribute('keydown', 'mover()');

let posicionObjetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];   
let posicionJugador1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
let posicionJugador2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

body.addEventListener('load', pintarTablero());

function pintarTablero(){
    for (let i = 0 ; i < 10; i ++){
        for (let j = 0 ; j < 10; j ++){
            let div = document.createElement('div');
            div.classList.add('card');
            div.classList.add(i + 'f');
            div.classList.add(j + 'c');
            main.appendChild(div);
        }
    }
    pintarFichas();
}

function pintarFichas(){

    objetivo = document.getElementsByClassName(`card ${posicionObjetivo[0]}f ${posicionObjetivo[1]}c`)[0];
    objetivo.classList.add('objetivo');
    jugador1 = document.getElementsByClassName(`card ${posicionJugador1[0]}f ${posicionJugador1[1]}c`)[0];
    jugador1.classList.add('jugador1');
    jugador2 = document.getElementsByClassName(`card ${posicionJugador2[0]}f ${posicionJugador2[1]}c`)[0];
    jugador2.classList.add('jugador2');

}

document.addEventListener('keydown', mover);

function mover(event){
    switch (event['key']) {
        // Jugador 1 (flechas)
        case 'ArrowUp': // arriba
        parseInt(jugador1.classList[1]) - 1;
        objetivo.removeClass
        break;
        case 'ArrowDown': // abajo
            
        break;
        case 'ArrowLeft': // izquierda
            
            break;
        case 'ArrowRight': // derecha
            
        break;

        // Jugador 2 (W S A D)
        case 'w': // arriba
            
        break;
        case 's': // abajo
            
        break;
        case 'a': // izquierda
            
        break;
        case 'd': // derecha
            
            break;
        default:
            break;
    }
}

/**
 * Creamos dos clases distintas:
 * -    objetivo:   corresponde al punto donde tengo que llegar
 * -    actual:     corresponde al punto actual
 */

/**
 * EL ALGORITMO MARIO GARCIA
 * -    En cada div necesitamos tener el valor de cada fila y cada columna en la clase.
 * -    Introducir la 'i' y 'j' en la funcion que crea el tablero (i --> fila, j --> columna).
 * -    Para recoger estas filas y columnas de cada div, utilizamos classList para recoger el valor.
 * -    Para mover las casillas compruebo el valor de estas filas y columnas y opero
 */