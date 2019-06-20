location1 = 3;
location2 = 4;
location3 = 5;

let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
	let disparo = prompt ("Ready, aim, fire! (enter a number from 0 to 6");
	if ( disparo < 0 || disparo > 6 ) {
		alert ("Añade un número entre 0 y 6 para disparar!");
	} else {
		guesses = guesses + 1;
		if (disparo == location1 ||
			disparo == location2 ||
			disparo == location3 ) {
			hits = hits +1;
			console.log(hits);
		} if (hits == 3) {
			isSunk = true;
			alert ("You sank my battleship, son of a bitch!");
		}
	}
}
alert (`You guessed ${guesses} times before winning`);