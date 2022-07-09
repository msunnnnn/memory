"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);


createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    // missing code here ...
    let box = document.createElement("div")
    box.classList.add(color)
    box.setAttribute("flipped", "false")
    box.setAttribute("matched", "false")
    gameBoard.appendChild(box)
    box.addEventListener("click", handleCardClick)
  }
}

/** Flip a card face-up. */

function flipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = card.className
  card.setAttribute("flipped", "true")

}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = "white"
  card.setAttribute("flipped", "false")

}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // ... you need to write this ...

  let flipped = document.querySelectorAll(`[flipped="true"]`)
  let matched = document.querySelectorAll(`[matched="true"]`)

  for (let match of matched){
    console.log(match)
    if (this !== match && flipped.length < 2 && flipped[0]!== this){
      flipCard(this)
  }


  }
  if(flipped.length === 1 && flipped[0]!== this){
    if (this.className === flipped[0].className){
      flipped[0].setAttribute("matched","true")
      this.setAttribute("matched","true")
      flipped[0].setAttribute("flipped", "false")
      this.setAttribute("flipped", "false")
    }
  // if (!(a[0].getAttribute("matched")) && !(this.getAttribute("matched"))){
  else{
      setTimeout(()=>{
      unFlipCard(this)
      unFlipCard(flipped[0])}, 1000) }
  }
}


