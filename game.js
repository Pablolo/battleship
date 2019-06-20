location1 = 3;
location2 = 4;
location3 = 5;

let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
	let disparo = prompt ("Ready, aim, fire! (enter a number from 0 to 6");
	if ( disparo < 0 || disparo > 6 ) {
		alert ("Add a number between 0 and 6 to shoot!");
	} else {
		guesses = guesses + 1;
		if (disparo == location1 ||
			disparo == location2 ||
			disparo == location3 ) {
			hits = hits +1;
			console.log(hits);
			alert ("Fuck, you hit it!");
		} else {
			alert ("You missed! Hahaha. Go again.");
		} if (hits == 1) {
			alert ("Okay, 1 hit, there's 2 more to find...");
		} if (hits == 2) {
			alert ("Okay, 2 hits! There's 1 more to find!");
		} if (hits == 3) {
			isSunk = true;
			alert ("You finally sank my battleship, son of a bitch!");
		}
	}
}

const stats = `You guessed ${guesses} times before winning, which means your accuracy was ` + ((3/guesses)*100) + `%`;
alert (stats);