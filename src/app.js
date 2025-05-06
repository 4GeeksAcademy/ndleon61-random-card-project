import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardSymbol = [
  { name: "Hearts", icon: "fa-heart", class: "symbol-red"},
  { name: "Diamonds", icon: "fa-gem", class: "symbol-pink" },
  { name: "Clubs", icon: "fa-leaf", class: "symbol-green" },
  { name: "Spades", icon: "fa-shield-alt", class: "symbol-yellow" }
];
let number = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, "Queen", "King", "Knight"];

const card = document.getElementById('card');

function randomCard() {
  let randomSymbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  document.getElementById('cardNumber').innerText = `${randomNumber}`;

  let topIcon = document.getElementById('topIcon');
  let bottomIcon = document.getElementById('bottomIcon');

  topIcon.className = `fas ${randomSymbol.icon} ${randomSymbol.class}`;
  bottomIcon.className = `fas ${randomSymbol.icon} ${randomSymbol.class}`;
}

window.onload = function () {
  randomCard(); // show a card when the page loads
};

document.getElementById('button').addEventListener('click', function () {
  card.classList.remove('animate-card');
  void card.offsetWidth;
  card.classList.add('animate-card');
  randomCard();
});