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
let nombre1 = prompt("Nombre del jugador 1: ");
let nombre2 = prompt("Nombre del jugador 2: ");

let main = document.getElementsByTagName('main')[0];
let body = document.getElementsByTagName('body')[0];
let input = document.createElement('input');
input.setAttribute('keydown', 'mover()');


let nombreJ1 = document.getElementsByClassName('nombreJ1')[0];
nombreJ1.textContent = nombre1;
let nombreJ2 = document.getElementsByClassName('nombreJ2')[0];
nombreJ2.textContent = nombre2;
let nombreObjetivo = document.getElementsByClassName('nombreObjetivo')[0];
nombreObjetivo.textContent = 'Objetivo:';
let boton_reinicar = document.getElementsByClassName('reiniciar')[0];
boton_reinicar.textContent = 'REINICIAR';
boton_reinicar.setAttribute('onclick', 'reinicioCompleto()');
let contadorJ1 = 0;
let contadorJ2 = 0;
let contador_J1 = document.getElementsByClassName('contadorJ1')[0];
contador_J1.textContent = `Victorias: ${contadorJ1}`;
let contador_J2 = document.getElementsByClassName('contadorJ2')[0];
contador_J2.textContent = `Victorias: ${contadorJ2}`;

body.addEventListener('load', pintarTablero());

function pintarTablero(){
    for (let i = 0 ; i < 15; i ++){
        for (let j = 0 ; j < 15; j ++){
            let div = document.createElement('div');
            div.classList.add('card');
            div.classList.add(i + 'f');
            div.classList.add(j + 'c');
            main.appendChild(div);
        }
    }
    pintarFichas();
}

function darleValor(){

    posicionObjetivo = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)];   
    posicionJugador1 = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)];
    posicionJugador2 = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)];

}

function pintarFichas(){

    darleValor();

    objetivo = document.getElementsByClassName(`card ${posicionObjetivo[0]}f ${posicionObjetivo[1]}c`)[0];
    jugador1 = document.getElementsByClassName(`card ${posicionJugador1[0]}f ${posicionJugador1[1]}c`)[0];
    jugador2 = document.getElementsByClassName(`card ${posicionJugador2[0]}f ${posicionJugador2[1]}c`)[0];

    objetivo.classList.add('objetivo');
    jugador1.classList.add('jugador1');
    jugador2.classList.add('jugador2');

}

function reiniciar(){
    jugador1.classList.remove('jugador1');
    jugador2.classList.remove('jugador2');
    objetivo.classList.remove('objetivo');
    pintarFichas();
}

function reinicioCompleto(){
    alert('Juego reiniciado');
    jugador1.classList.remove('jugador1');
    jugador2.classList.remove('jugador2');
    objetivo.classList.remove('objetivo');
    pintarFichas();
    contadorJ1 = 0;
    contadorJ2 = 0;
    contador_J1.textContent = `Victorias: ${contadorJ1}`;
    contador_J2.textContent = `Victorias: ${contadorJ2}`;
    
}

document.addEventListener('keydown', mover);

function verGanador(){
    if(posicionJugador1[0] == posicionObjetivo[0] && posicionJugador1[1] == posicionObjetivo[1]){
        contadorJ2++;
        contador_J2.textContent = `Victorias: ${contadorJ2}`;
        alert(`Ha ganado ${nombre2}`);
        reiniciar();
    }
    if(posicionJugador2[0] == posicionObjetivo[0] && posicionJugador2[1] == posicionObjetivo[1]){
        contadorJ1++;
        contador_J1.textContent = `Victorias: ${contadorJ1}`;
        alert(`Ha ganado ${nombre1}`);
        reiniciar();
    }
}

function mover(event){
    switch (event['key']) {
        // Jugador 1 (flechas)
        case 'ArrowUp': // arriba
        jugador1.classList.remove('jugador1');
        posicionJugador1[0] = posicionJugador1[0] - 1;
        if(posicionJugador1[0] < 0){
            posicionJugador1[0] = 14;
        }
        jugador1 = document.getElementsByClassName(`card ${posicionJugador1[0]}f ${posicionJugador1[1]}c`)[0];
        jugador1.classList.add('jugador1');
        verGanador();
        break;
        case 'ArrowDown': // abajo
        jugador1.classList.remove('jugador1');
        posicionJugador1[0] = posicionJugador1[0] + 1;
        if(posicionJugador1[0] > 14){
            posicionJugador1[0] = 0;
        }
        jugador1 = document.getElementsByClassName(`card ${posicionJugador1[0]}f ${posicionJugador1[1]}c`)[0];
        jugador1.classList.add('jugador1');
        verGanador();
        break;
        case 'ArrowLeft': // izquierda
        jugador1.classList.remove('jugador1');
        posicionJugador1[1] = posicionJugador1[1] - 1;
        if(posicionJugador1[1] < 0){
            posicionJugador1[1] = 14;
        }
        jugador1 = document.getElementsByClassName(`card ${posicionJugador1[0]}f ${posicionJugador1[1]}c`)[0];
        jugador1.classList.add('jugador1');  
        verGanador();  
        break;
        case 'ArrowRight': // derecha
        jugador1.classList.remove('jugador1');
        posicionJugador1[1] = posicionJugador1[1] + 1;
        if(posicionJugador1[1] > 14){
            posicionJugador1[1] = 0;
        }
        jugador1 = document.getElementsByClassName(`card ${posicionJugador1[0]}f ${posicionJugador1[1]}c`)[0];
        jugador1.classList.add('jugador1');   
        verGanador(); 
        break;

        // Jugador 2 (W S A D)
        case 'w': // arriba
        jugador2.classList.remove('jugador2');
        posicionJugador2[0] = posicionJugador2[0] - 1;
        if(posicionJugador2[0] < 0){
            posicionJugador2[0] = 14;
        }
        jugador2 = document.getElementsByClassName(`card ${posicionJugador2[0]}f ${posicionJugador2[1]}c`)[0];
        jugador2.classList.add('jugador2');
        verGanador();
        break;
        case 's': // abajo
        jugador2.classList.remove('jugador2');
        posicionJugador2[0] = posicionJugador2[0] + 1;
        if(posicionJugador2[0] > 14){
            posicionJugador2[0] = 0;
        }
        jugador2 = document.getElementsByClassName(`card ${posicionJugador2[0]}f ${posicionJugador2[1]}c`)[0];
        jugador2.classList.add('jugador2'); 
        verGanador();   
        break;
        case 'a': // izquierda
        jugador2.classList.remove('jugador2');
        posicionJugador2[1] = posicionJugador2[1] - 1;
        if(posicionJugador2[1] < 0){
            posicionJugador2[1] = 14;
        }
        jugador2 = document.getElementsByClassName(`card ${posicionJugador2[0]}f ${posicionJugador2[1]}c`)[0];
        jugador2.classList.add('jugador2');   
        verGanador(); 
        break;
        case 'd': // derecha
        jugador2.classList.remove('jugador2');
        posicionJugador2[1] = posicionJugador2[1] + 1;
        if(posicionJugador2[1] > 14){
            posicionJugador2[1] = 0;
        }
        jugador2 = document.getElementsByClassName(`card ${posicionJugador2[0]}f ${posicionJugador2[1]}c`)[0];
        jugador2.classList.add('jugador2');    
        verGanador(); 
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