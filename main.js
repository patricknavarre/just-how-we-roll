
/****************
 * ----DATA---- *
 ****************/
const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];

/****************************
 * ----HELPER FUNCTIONS---- *
*****************************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

/**************************
 * ----BUTTON QUERIES---- *
 **************************/
const d6button = document.querySelector('#d6-roll');
const doubleD6button1 = document.querySelector('#double-d6-roll-1');
const doubleD6button2 = document.querySelector('#double-d6-roll-2');
const d12button = document.querySelector('#d12-roll');
const d20button = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');

/************************
 * ----MATH QUERIES---- *
 ************************/

const d6mean = document.querySelector('#d6-rolls-mean');
const d6median = document.querySelector('#d6-rolls-median');
const d6mode = document.querySelector('#d6-rolls-mode');
const doubleD6mean = document.querySelector('#double-d6-rolls-mean');
const doubleD6median = document.querySelector('#double-d6-rolls-median');
const doubleD6mode = document.querySelector('#double-d6-rolls-mode');
const d12mean = document.querySelector('#d12-rolls-mean');
const d12median = document.querySelector('#d12-rolls-median');
const d12mode = document.querySelector('#d12-rolls-mode');
const d20mean = document.querySelector('#d20-rolls-mean');
const d20median = document.querySelector('#d20-rolls-median');
const d20mode = document.querySelector('#d20-rolls-mode');

/*************************
 * ----PICTURE PATHS---- *
 *************************/
d6button.src = './images/start/d6.png';
doubleD6button1.src = './images/start/d6.png';
doubleD6button2.src = './images/start/d6.png';
d12button.src = './images/start/d12.jpeg';
d20button.src = './images/start/d20.jpg';


/**************************
 * ----RESET FUNCTION---- *
 **************************/

const resetAll = () => {
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;

  d6button.src = './images/start/d6.png';
  doubleD6button1.src = './images/start/d6.png';
  doubleD6button2.src = './images/start/d6.png';
  d12button.src = './images/start/d12.jpeg';
  d20button.src = './images/start/d20.jpg';

  d6mean.innerText = 'NA';
  d6median.innerText = 'NA';
  d6mode.innerText = 'NA';
  doubleD6mean.innerText = 'NA';
  doubleD6median.innerText = 'NA';
  doubleD6mode.innerText = 'NA';
  d12mean.innerText = 'NA';
  d12median.innerText = 'NA';
  d12mode.innerText = 'NA';
  d20mean.innerText = 'NA';
  d20median.innerText = 'NA';
  d20mode.innerText = 'NA';
}

/************************************
 * ----CLICK HANDLING FUNCTIONS---- *
 ************************************/

const rollD6 = () => {
  const roll = getRandomNumber(6);
  // console.log(roll)
  sixes.push(roll);

  const mean = getMean(sixes);

  d6button.src = `./images/d6/${roll}.png`;
  d6mean.innerText = mean
}

const rollDoubleD6 = () => {
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);
  doubleSixes.push(roll1 + roll2)

  doubleD6button1.src = `./images/d6/${roll1}.png`;
  doubleD6button2.src = `./images/d6/${roll2}.png`;
}

const rollD12 = () => {
  const roll = getRandomNumber(12);
  twelves.push(roll);

  d12button.src = `./images/numbers/${roll}.png`;
}

const rollD20 = () => {
  const roll = getRandomNumber(20);
  twenties.push(roll);

  d20button.src = `./images/numbers/${roll}.png`;
}

/************************
 * ----MATH SECTION---- *
 ************************/
// Mean - calculate the average of the array 
// by adding the total and dividing by number of elements

const getMean = (numbers) => {
  let total = 0
  for(number of numbers) {
    total += number;
  }
  let avg = total / numbers.length;
  return avg;

  // one-liner to study later -
// const average = arr => arr.reduce((sum, el) => sum + el, 0) / arr.length;
}

/***************************
 * ----EVENT LISTENERS---- *
 ***************************/
d6button.addEventListener('click', rollD6);
doubleD6button1.addEventListener('click', rollDoubleD6);
doubleD6button2.addEventListener('click', rollDoubleD6);
d12button.addEventListener('click', rollD12);
d20button.addEventListener('click', rollD20);
resetButton.addEventListener('click', resetAll);
