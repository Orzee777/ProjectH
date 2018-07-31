var turnPosition = 0;
var pot = [];
var rank = 0;
var heartsBroken = false;

function Card (name, suit, value) {
	this.name = name + " of " + suit;
	this.suit = suit;
	this.rank = rank++;
	
	if (suit === "Clubs") {
		this.abbr = "<p class='black'>&clubs;" + " " + name + "</p>";
        this.value = 0;
	}
	else if (suit === "Diamonds") {
		this.abbr = "<p class='red'>&diams;" + " " + name + "</p>";
        this.value = 0;
	}
	else if (suit === "Hearts") {
		this.abbr = "<p class='red'>&hearts;" + " " + name + "</p>";
        this.value = 1;
	}
	else if (suit === "Spades") {
		this.abbr = "<p class='black'>&spades;" + " " + name + "</p>";
        this.value = (name === "Queen") ? 13 : 0;
	}
	else {
		console.error("Could not determine suit of new card " + this.name);
	}
}

var cards = [
	clubs2 = new Card ("Two", "Clubs"),
	clubs3 = new Card ("Three", "Clubs"),
	clubs4 = new Card ("Four", "Clubs"),
	clubs5 = new Card ("Five", "Clubs"),
	clubs6 = new Card ("Six", "Clubs"),
	clubs7 = new Card ("Seven", "Clubs"),
	clubs8 = new Card ("Eight", "Clubs"),
	clubs9 = new Card ("Nine", "Clubs"),
	clubs10 = new Card("Ten", "Clubs"),
	clubsJ = new Card("Jack", "Clubs"),
	clubsQ = new Card("Queen", "Clubs"),
	clubsK = new Card("King", "Clubs"),
	clubsA = new Card ("Ace", "Clubs"),
	diams2 = new Card ("Two", "Diamonds"),
	diams3 = new Card ("Three", "Diamonds"),
	diamsA = new Card ("Ace", "Diamonds"),
	spades2 = new Card ("Two", "Spades"),
	spadesQ = new Card ("Queen", "Spades"),
	spadesA = new Card ("Ace", "Spades"),
	hearts2 = new Card ("Two", "Hearts"),
	hearts3 = new Card ("Three", "Hearts"),
	hearts4 = new Card ("Four", "Hearts"),
	hearts5 = new Card ("Five", "Hearts"),
	hearts6 = new Card ("Six", "Hearts"),
	hearts7 = new Card ("Seven", "Hearts"),
	hearts8 = new Card ("Eight", "Hearts"),
	hearts9 = new Card ("Nine", "Hearts"),
	hearts10 = new Card ("Ten", "Hearts"),
	heartsJ = new Card ("Jack", "Hearts"),
	heartsQ = new Card ("Queen", "Hearts"),
	heartsK = new Card ("King", "Hearts"),
	heartsA = new Card ("Ace", "Hearts")
];

var disburseDeck = function (players) {

	while ((cards.length % players.length) != 0) {
		pot.push(cards[0]);
		//console.log("The pot got " + cards[0].name);
		cards.shift();
	}
	for (i = 0; cards.length > 0; i++) {
		players[i].deck.push(cards[0]);
		//console.log(players[i].name + " got " + cards[0].name);
		cards.shift();
		if (i === players.length - 1) {
			i = -1;
		}
	}
}

function Player (name) {
	this.name = name;
	this.turnPosition = turnPosition;
	this.hand = [];
	this.deck = [];
	this.points = 0;
	turnPosition++;
	
	this.printDeck = function () {
		string = "";
		for (i = 0; i < this.deck.length; i++) {
			 string += (this.deck[i].abbr + ", ");
		}
		return string.slice(0, string.length-2);
	}

	this.lead = function () {
		suit = ["Clubs", "Diamonds", "Spades", "Hearts"];
		this.play(suit);
	}
	
	this.play = function (suit) {
		if (sortbySuit(this.deck, suit)) {
			selectedIndex = Math.floor(Math.random()*this.deck.length);
			selected = this.deck[selectedIndex];
			pool.push(selected);
			this.deck.splice(selectedIndex, 1);
		}
		else {
			this.lead();
		}
	}
}

// make the number of players from 1 - 52
var players = [
player1 = new Player ("Anna"),
player2 = new Player ("Brad"),
player3 = new Player ("Cory"),
player4 = new Player ("Dave"),
player5 = new Player ("CPU1"),
player6 = new Player ("CPU2")
];

var merge = function (left, right) {
	var mergedList = [];
    leftIndex = 0;
    rightIndex = 0;
	
	while ((left.length > leftIndex) && (right.length > rightIndex)) {
    
		if (left[leftIndex].rank < right[rightIndex].rank) {
			mergedList.push(left[leftIndex++]);
		}
		else if (left[leftIndex].rank >= right[rightIndex].rank) {
			mergedList.push(right[rightIndex++]);
		}
		else {
			console.error("Could not properly sort these cards: " + left[0].name + " and " + right[0].name);
            break;
		}
	}
    
	return mergedList.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

var sortBySuit = function (deck, suit) {
	var suitDeck = [];
	for (let i = 0; i < deck.length; i++) {
		if (deck[i].suit === suit) {
			suitDeck.push(deck[i]);
		}
	}

	if (suitDeck.length === 0) {
		return false;
	}

	return suitDeck;
}

var sortCards = function (deck) {
	if (deck.length <= 1) {
		return deck;
	}
    
    var middle = Math.floor(deck.length / 2);
    var left = deck.slice(0, middle);
    var right = deck.slice(middle);

    return merge(sortCards(left), sortCards(right));
}

function shuffle(array) {
	// this function is copied entirely from stack overflow
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

var firstTurn = function () {

console.log("Calculating first turn...");

    for (var lowestRank = 0; lowestRank < 52; lowestRank++) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].deck[0].rank === lowestRank) {
            	console.log(players[i].name + " has the lowest card of " + players[i].deck[0].name);
                return players[i];
            }
        }
    }
}

var turn = function (winner) {
	var lastTurn = [player1, player2, player3, player4, player5, player6];
	if (!winner) {winner = lastTurn[Math.floor(Math.random()*lastTurn.length)];
    console.log("Random winner: " + winner.name);}
    pos = winner.turnPosition - 1;
	newTurn = [];
	for (let i = 0; i < lastTurn.length; i++) {
		if (pos === lastTurn.length - 1) {
			pos = 0;
		}
		else {
			pos++;
		}
		newTurn.push(lastTurn[pos]);
	}
}

var breakHearts = function (card) {
	if (card.value > 0) {
    	var heartsBroken = true;
    }
}

Array.prototype.printArray = function () {
		string = "";
		for (i = 0; i < this.length; i++) {
			 string += (this[i].abbr + ", ");
		}
		return string.slice(0, string.length-2);
	}

shuffle(cards);

disburseDeck(players);

// sorts all the player decks
for (let i = 0; i < players.length; i++) {
	players[i].deck = sortCards(players[i].deck);
}

turn(firstTurn());

for (let i = 0; i < players.length; i++) {
	document.getElementById(i.toString()).innerHTML = newTurn[i].name + " [" + newTurn[i].printDeck() + "] &nbsp;&nbsp;&nbsp;(" + newTurn[i].deck.length + ")";
}

for (let i = 0; i < pot.length; i++) {
	document.getElementById("6").innerHTML = "Pot [" + pot.printArray() + "]";
}

// create game loop here

// pool contains all cards currently in play
var pool = [];

for (let turnIndex = 0; turnIndex < newTurn.length; turnIndex++) {
	// players all play their turn
    newTurn[turnIndex].play(suit);
    document.getElementById("7").innerHTML = "Pool [" + pool.printArray() + "]";
}