/**
 * addEventListener('evento', funcion);
 * 
 * El metodo addEventListener relaciona la aparicion de un evento con la ejecucion de una funcion.
 * 
 * Este metodo se aplica sobre un elemento de HTML.
 * 
 * Sustituye al element.setAttribute('evento', 'funcion')
 * 
 * EVENTO LOAD
 * Evento que hace referencia a cuando la pagina web carga completamente.
 * NO AFECTA SOBRE OTROS ELEMENTOS QUE NO SEAN BODY
 * 
 */
// Localizo etiqueta main
let main = document.getElementsByTagName('main')[0];
let body = document.getElementsByTagName('body')[0];

body.addEventListener('load', pintarTablero());


function pintarTablero(){
    let posicionObjetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let posicionInicio = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

    // console.log('has hecho un click')

    for (let i = 0 ; i < 10; i ++){
        for (let j = 0 ; j < 10; j ++){
            let div = document.createElement('div');
            div.classList.add('card');
            main.appendChild(div);
            /**
             * Asigno la fila y la columna como clase en mi div
             */
            div.classList.add(i+'f');
            div.classList.add(j+'c');
            /**
             * Para pintar una casilla, le damos color de fondo
             */
            if(i == posicionObjetivo[0] && j == posicionObjetivo[1]){
                div.classList.add('objetivo');
                console.log(div.classList);
                console.log('Estamos en la fila: ' + parseInt(div.classList[1]));
                console.log('Estamos en la columna: ' + parseInt(div.classList[2]));
            }
            if(i == posicionInicio[0] && j == posicionInicio[1]){
                div.classList.add('actual');
                console.log(div.classList);
                console.log('Estamos en la fila: ' + parseInt(div.classList[1]));
                console.log('Estamos en la columna: ' + parseInt(div.classList[2]));
            }
        }
    }
}

/**
 * Necesito cualquier evento de tecla para poder mover el color de la casilla
 * -    DONDE:                              El evento lo aplico sobre todo el documento HTML (uso document.) 
 * -    EVENTO:                             El evento elegido es 'keydown'.
 * -    FUNCION EJECUTADA:                  La funcion elegida es 'mover'.
 * -    RELACION EVENTO, FUNCION Y LUGAR:   El metodo elegido es addEventListener
 * 
*/
document.addEventListener('keydown', mover);

/**
 * Esta funcion mover recibe por parametro objeto event que referencia a la clase KeyboardEvent
 */
function mover(event){
    switch (event['key']) {
        case 'ArrowUp':
            posicionInicio[0] - 1;
            break;
        case 'ArrowDown':
            console.log('has pulsado la tecla hacia abajo')
        break;
        case 'ArrowLeft':
            console.log('has pulsado la tecla hacia izquierda')
            break;
        case 'ArrowRight':
            console.log('has pulsado la tecla hacia derecha')
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