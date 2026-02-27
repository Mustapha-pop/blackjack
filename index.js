let credit;
let card;
let dealerCards;
let comEl = document.getElementById("comment");
let credEl = document.getElementById("Credit");
let sumEl = document.getElementById("sum");
let cardEl = document.getElementById("cards");
let dealerEl = document.getElementById("dealer");
let draw;
let sumValue;
credit = 500;
let played = false;
let ended = false;
function startGame() {
  draw = 0;
  card = 0;
  sumValue = 0;
  dealerCards = 0;
  played = false;
  ended = false;
  comEl.textContent = "🆕A New Game has started🆕";
  cardEl.textContent = "Your Cards:";
  sumEl.textContent = "♦️Sum:♦️";
  credEl.textContent = "💵Credit:" + " " + credit + "💵";
  dealerEl.textContent = "The Dealer Cards:";
}
function drawCard() {
  played = true;
  if (sumValue < 21 && !ended) {
    card = random2to12();
    cardEl.textContent += " " + "♥️" + card + "♣️";
    comEl.textContent = "You Have Drawn an " + "♥️" + card + "♣️";
    calculateSum();
  }
}
function calculateSum() {
  sumValue += card;
  sumEl.textContent = "♦️Sum: " + sumValue + "♦️";
}
function random2to12() {
  let randNum = Math.floor(Math.random() * 11) + 2;

  if (randNum > 10) {
    return 10;
  } else if (randNum === 1) {
    return 11;
  } else {
    return randNum;
  }
}

function dealerCard() {
  for (i = 0; i < 2; i++) {
    card = random2to12();
    dealerCards += card;
  }
  dealerEl.textContent =
    "|The Dealer Cards:" + " " + "♥️" + card + "♣️" + "🃏?🃏 " + "|";
}
function checkWinner() {
  if (!played) {
    return;
  }
  if (ended) {
    return;
  }
  if (sumValue > 21) {
    // player busts
    credit /= 2;
    comEl.textContent = "😔 You Bust 😔";
  } else if (dealerCards > 21) {
    // dealer busts
    credit *= 2;
    comEl.textContent = "🥳 You Won! 🥳";
  } else if (sumValue === 21 && dealerCards === 21) {
    // draw
    comEl.textContent = "😬 DRAW 😬";
    return;
  } else if (sumValue === 21) {
    // player hits 21
    credit *= 2;
    comEl.textContent = "🥳 You Won! 🥳";
  } else if (dealerCards === 21) {
    // dealer hits 21
    credit /= 2;
    comEl.textContent = "😔 You Lost 😔";
  } else if (sumValue > dealerCards) {
    // higher hand wins
    credit *= 2;
    comEl.textContent = "🥳 You Won! 🥳";
  } else {
    // dealer wins
    credit /= 2;
    comEl.textContent = "😔 You Lost 😔";
  }

  credEl.textContent = `💵 Credit: ${credit} 💵`;
  ended = true;
}
/*https://dynamic-stardust-a4aed7.netlify.app/ */
