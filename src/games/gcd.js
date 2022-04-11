import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomNumber from '../random.js';

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function findGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return findGcd(b, a % b);
}

/**
 * @return {Array}
 */
function isGcd() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  console.log(`${num1} ${num2}`);

  const answer = findGcd(num1, num2);

  const yourAnswer = Number(readlineSync.question('Your answer: '));
  return [answer, yourAnswer, answer === yourAnswer];
}

const gameDescription = 'Find the greatest common divisor of given numbers.';

const brainGamesGcd = () => runGame(gameDescription, isGcd);

export default brainGamesGcd;
