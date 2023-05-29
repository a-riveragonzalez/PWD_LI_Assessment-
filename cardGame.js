// Overview

// Create a JS file that uses classes to create an object representing a deck of cards. Then create a simple console version of the card game 'War'

// Steps:

// 1. Create a Deck class
class Deck {
  constructor(suit, name, value) {
    this.suit = suit;
    this.name = name;
    this.value = value;
  }
  // 2. Create a method on the Deck class that dynamically generates each card object
  // example card object: {suit: "hearts", value: 2}

  // a card's value corresponds to the number/face card's rank

  // ace = 1
  // cards 2-10 = their number value
  // jacks = 11
  // queens = 12
  // kings = 13
  generateDeck() {
    const suitArray = ["hearts", "diamonds", "spades", "clubs"];
    const nameArray = "ace 2 3 4 5 6 7 8 9 10 jack queen king".split(" ");
    // 3. card objects can be held inside an array
    const deck = [];

    for (let i = 0; i < suitArray.length; i++) {
      for (let j = 0; j < nameArray.length; j++) {
        let currentValue;

        switch (nameArray[j]) {
          case "ace":
            currentValue = 1;
            break;
          case "2":
            currentValue = 2;
            break;
          case "3":
            currentValue = 3;
            break;
          case "4":
            currentValue = 4;
            break;
          case "5":
            currentValue = 5;
            break;
          case "6":
            currentValue = 6;
            break;
          case "7":
            currentValue = 7;
            break;
          case "8":
            currentValue = 8;
            break;
          case "9":
            currentValue = 9;
            break;
          case "10":
            currentValue = 10;
            break;
          case "jack":
            currentValue = 11;
            break;
          case "queen":
            currentValue = 12;
            break;
          case "king":
            currentValue = 13;
            break;
        }

        deck.push({
          suit: suitArray[i],
          name: nameArray[j],
          value: currentValue,
        });
      }
    }

    return deck;
  }

  // 4. create a method to select a random card object
  getRandomCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)];
  }
}

// 5. create a function that runs the random card method on each deck, and compares the values of the 2 random cards
function playWar() {
  // create two instances of the deck
  let deck1 = new Deck().generateDeck();
  let deck2 = new Deck().generateDeck();

  // creating the random card from each instance of the decks
  let player1Card = new Deck().getRandomCard(deck1);
  let player2Card = new Deck().getRandomCard(deck2);

  console.log("Player 1 : " + player1Card);
  console.log("Player 2 : " + player2Card);

  if (player1Card.value > player2Card.value) {
    console.log(
      `Player 1 Wins with a ${player1Card.name} of ${player1Card.suit}! Player 2 loses with a ${player2Card.name} of ${player2Card.suit}`
    );
  } else if (player1Card.value < player2Card.value) {
    console.log(
      `Player 2 Wins with a ${player2Card.name} of ${player2Card.suit}! Player 1 loses with a ${player1Card.name} of ${player1Card.suit}`
    );
  } else {
    console.log(
      `Player 1 and Player 2 have a tie! Player 1 has a ${player1Card.name} of ${player1Card.suit} and Player 2 has a ${player2Card.name} of ${player2Card.suit}`
    );
  }
}

// 6. console log both card objects, and a message declaring which one has the higher value
playWar();
