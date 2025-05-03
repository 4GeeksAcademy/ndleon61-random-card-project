import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
  let cardSymbol = [
    { name: "Hearts", icon: "fa-heart" },
    { name: "Diamonds", icon: "fa-gem" },
    { name: "Clubs", icon: "fa-leaf" },
    { name: "Spades", icon: "fa-shield-alt" }
  ];
let number = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, "Queen", "King", "Knight"];


window.onload = function() {
  //Randomize number and symbols

  let randomSymbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  //Display the random number
  document.getElementById('cardNumber').innerText = `${randomNumber}`;

  // Display the random symbols
  let topIcon = document.getElementById('topIcon');
  let btnIcon = document.getElementById('bottomIcon');

  topIcon.className = `fas ${randomSymbol.icon}`;
  bottomIcon.className = `fas ${randomSymbol.icon}`;

};
