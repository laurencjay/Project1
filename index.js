var gamePrompt = require('game-prompt');
var fuel = 1000;
var artifacts = 0;
var playerName;
var vehicleName;
var planets = [
		
		{
			name: '[E]arth',
			distance: '10 ligthyears'
		},

		{
			name:'[M]esnides',
			distance: '20 lightyears'
		},
		
		{
			name:'[L]aplides',
			distance: '50 lightyears' 
		},
		
		{
			name: '[A]enides',
			distance: '20 lightyears'
		},
		
		{
			name: '[C]ramuthea',
			distance: '200 lightyears'
		},
		
		{
			name: '[S]meon T9Q',
			distance: '400 lightyears'
		},
		
		{
			name: '[G]leshan 7Z9',
			distance: '85 lightyears'
		},	
];

function startGame() {
	gamePrompt("S.R.S.V. Press Enter to start.", intro); 

}

function gameOver() {
	console.log('You have run out of fuel. The game is now over.');
}


function chooseDestination () {
	gamePrompt(['Where to Captain ' + playerName + '?' +
	  '\n(E)arth - 10 lightyears' +
	  '\n(M)esnides - 20 lightyears' + 
	  '\n(L)aplides - 50 lightyears' +
	  '\n(K)iyturn - 120 lightyears' +
	  '\n(A)enides - 25 lightyears' +
	  '\n(C)ramuthea - 200 lightyears' +
	  '\n(S)meon T9Q - 400 lightyears' +
	  '\n(G)leshan 7Z9 - 85 lightyears' +
	  '\nplayerName + 'you now have ' + artifacts + ' artifacts.], planetChoice)
}

function planetChoice(planet) {
	if planet.toUpperCase === 'M' {
		gamePrompt(['Now traveling to Mesnides.'], greetingMesnides);
	} else if planet.toUpperCase === 'K' {
		gamePrompt(['Now traveling to Kiyturn.'], greetingKiyturn);
	} else if planet.toUpperCase === 'L' {
		gamePrompt(['Now traveling to Laplides.'], messageLaplides);
	} else if planet.toUpperCase === 'A' {
		gamePrompt(['Now traveling to Aenides.'], messageAenides);
	} else {
		gamePrompt(['PLease enter a valid destination'], chooseDestination);
	}



function greetingMesnides() {
	gamePrompt( ['Welcome, traveler, to Mesnides.'], mesnidesQuestion);
}

function mesnidesQuestion() {
	gamePrompt( ['How can we assist you? \nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', mesnidesDecision])
}

	function mesnidesDecision (decision) {
		if (decision.toUpperCase() === 'A') {
			artifacts = artifacts + 1
			gamePrompt ( ['Here, take this Myoin Horn, an ancient Mesnidian instrument.'], mesnidesQuestion;)
			
		} else if {
			(decision.toUpperCase() === 'L') {
				fuel = fuel - 20;
				if fuel === 0 {
					gameOver()
				} else {
				gamePrompt (['Leaving Mesnides. You now have' + fuel + ' gallons of fuel' ], chooseDestination);
			}

			} else (decision.toUpperCase() === 'P') {
				gamePrompt([ 'Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey.'], mesnidesQuestion);
			}
		}
	}

	function greetingKiyturn() {
		gamePrompt ([ '"Hello, what brings you to Kiyturn? You\'re not here to cause trouble are you?"'], kiyturnQuestion); 
	}

	function kiyturnQuestion () {
		gamePrompt( ['How can we assist you? \nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', kiyturnDecision])
	}

	function kiyturnDecision (decision) {
		if (decision.toUpperCase() === 'A') {
			var artifacts = artifacts + 1;
			gamePrompt (['"Here, take this Kiyturn Glass Bowl, a symbol of our civilization."'], kiyturnQuestion);
		} else if (decision.toUpperCase() === 'P') {
			gamePrompt (['"I\'m sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."
			"How can we assist you?"'], kiyturnQuestion); 
		} else (decision.toUpperCase() === 'L') {
			fuel = fuel - 120;
				if fuel <= 0 {
					gameOver()
				} else {
				gamePrompt (['Leaving Kiyturn. You now have' + fuel + ' gallons of fuel.' ], chooseDestination);
			}
	}

	function messageLaplides() {
		gamePrompt ([ playerName + ', ' + ' Laplides appears to be at war. We have no option but to turn around.'], laplidesFuelUpdate);
	}

	function laplidesFuelUpdate () {
		fuel = fuel - 50;
			if fuel <= 0 {
				gameOver()
			} else {
		gamePrompt (['Leaving Laplides. You now have ' + fuel + 'gallons of fuel.'], chooseDestination);
	}


	function messageAenides() {
		gamePrompt ([ playerName + ', ' + ' We are being approached by hostile people and fire has been detected. Leave immediatley.'], aenidesFuelUpdate);
	}

	function aenidesFuelUpdate () {
		fuel = fuel - 25;
			if fuel <= 0 {
				gameOver()
			} else {
		gamePrompt (['Leaving Aenides. You now have ' + fuel + 'gallons of fuel.'], chooseDestination);
	}



function startGame() {
	gamePrompt("S.R.S.V. Press Enter to start.", intro); 

}

function intro () {
	gamePrompt("You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition to explore foreign planets. Your mission is to make contact with three alien life forms, acquire an artifact representative of their culture, and bring back your findings to Earth.", collectInfo);
}



function collectInfo() {
	gamePrompt( [

			'A voice comes on over the intercom.',
			'"Please state your name for identity verification."',

		], collectName);
}

function collectName(name) {
	playerName = name;

	gamePrompt([

			'"Thank you Captain ' + playerName + '."',
			'"Please state your vehicle name for identity verification"',
		], collectVehicleName);

}

function collectVehicleName(name) {
	vehicleName = name;

	gamePrompt([
		'"Thank you ' + playerName + '.',
		vehicleName +  'has 1,000 gallons of fuel."',
		], chooseDestination); 
}










startGame();