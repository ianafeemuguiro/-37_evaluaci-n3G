
//Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos

// Inicio
// Piedra, papel o tijera
// usuario 1 : papel
// usuario 2 : tijera
// ganador == usuario 2
// Piedra, papel o tijera
// usuario 1 : papel
// usuario 2 : piedra
// ganador == usuario 1
// Piedra, papel o tijera
// usuario 1 : tijera
// usuario 2 : tijera
// ganador != undefined

var usuario1 = prompt ("Ingresa, piedra, papel o tijera");
var usuario2 = prompt ('Ingresa, piedra, papel o tijera');

var papel;
var tijera;
var piedra;

for (var i = 1; i <=3; i ++){

	if (papel < tijera){
		console.log('Gana usuario2');
	}
	if (piedra < papel){
		console.log('Gana usuario1');
	}else{
		(tijera == tijera)
		console.log('Pierden ambos');
	}
}