// console.log("This is working")


const player = {
	hand: [],
}

const computer = {
	hand: [],
}

	

const game = {

	library: [
		{name: "Bulbasaur", damage:60}, 
		{name: "Caterpie", damage:40},
		{name: "Charmander", damage:60},
		{name: "Clefairy", damage:50},
		{name: "Jigglypuff", damage:60},
		{name: "Mankey", damage:30},
		{name: "Meowth", damage:60},
		{name: "Nidoran - female", damage:60},
		{name: "Nidoran - male", damage:50},
		{name: "Oddish", damage:40},
		{name: "Pidgey", damage:50},
		{name: "Pikachu", damage:50},
		{name: "Poliwag", damage:50},
		{name: "Psyduck", damage:60},
		{name: "Rattata", damage:30}, 
		{name: "Squirtle", damage:60}, 
		{name: "Vulpix", damage:50}, 
		{name: "Weedle", damage:40}
	],

	cardsPlayed: [],
	computerPoints: 0,
	playerPoints: 0,
	currentRound: 1,
	roundsWonByPlayer: 0,
	roundsWonByComputer: 0,
	computerHand: [],
	
	deal() {
		let randomIndex = Math.floor(Math.random() * this.library.length);
		let dealtCard = this.library.splice(randomIndex, 1)[0];
		return dealtCard;	
	},

	playRound() {
		console.log("ROUND IS STARTING!");
		this.dealCards();
		this.battle();
		this.battle();
		this.battle();
		this.endRound();
	},

	playPokemon() {
		alert("THE GAME IS STARTING!")
		while(this.library.length > 5) {
			this.playRound();
		}
		console.log(`Gary has won ${this.roundsWonByComputer} rounds. :(`);
		console.log(`You have won ${this.roundsWonByPlayer} rounds. :(`);

	},

	endRound() {
		console.log("Round is Ending");
		console.log(`Ash has ${this.playerPoints}`);
		console.log(`Gary has ${this.computerPoints}`);
		if (this.playerPoints > this.computerPoints) {
			this.roundsWonByPlayer++;
		} else if (this.computerPoints > this.playerPoints) {
			this.roundsWonByComputer++;
			this.playerPoints = 0;
			this.computerPoints = 0;
			this.currentRound++;
		}	
	},

	dealCards() {
		for (let i = 0; i < 3; i++) {
			let playerCardDealt = this.deal();
			let computerCardDealt = this.deal();
			player.hand.push(playerCardDealt);
			computer.hand.push(computerCardDealt);
			this.cardsPlayed.push(playerCardDealt, computerCardDealt);
			console.log(this.cardsPlayed);
		}
	},

	battle() {
		console.log("THE BATTLE BEGINS IN 3...2...1...");
		let playerCard = player.hand.splice(0,1)[0];
		let computerCard = computer.hand.splice(0,1)[0];
		console.log(`You are playing ${JSON.stringify(playerCard)} AND Gary is playing ${JSON.stringify(computerCard)}`);
		console.log(playerCard);
		if (playerCard.damage > computerCard.damage) {
			this.playerPoints++;
			console.log(`You Win! You now have ${this.playerPoints} points!`);
		} else if (playerCard.damage < computerCard.damage) {
			this.computerPoints++;
			console.log("You Lose. :(");
			console.log(`Gary now has ${this.computerPoints} points.`);
		}
	},
};

game.playPokemon();

