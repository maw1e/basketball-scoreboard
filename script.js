"use-strict";

const scoreEl = document.querySelector("#score");
const foulEl = document.querySelector("#fouls");
const add1Btn = document.querySelector("#add1");
const add2Btn = document.querySelector("#add2");
const add3Btn = document.querySelector("#add3");
let score = 0;
let foul = 0;

function addOne() {
  score++;
  scoreEl.textContent = score;
}

function addTwo() {
  score += 2;
  scoreEl.textContent = score;
}

function addThree() {
  score += 3;
  scoreEl.textContent = score;
}

function minusOne() {
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  }
}

function addFoulOne() {
  foul++;
  foulEl.textContent = foul;
}
function minusFoulOne() {
  if (foul > 0) {
    foul--;
    foulEl.textContent = foul;
  }
}

function time() {
  const countDownTime = new Time();
}
