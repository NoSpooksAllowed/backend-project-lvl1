import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomNumber from '../random.js';

/**
 * @param {number} num
 * @return {string}
 */
function findPrimeAnswer(num) {
  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
}

/**
 * @return {Array}
 */
function isPrime() {
  const num = getRandomNumber(1, 100);
  console.log(num);

  const answer = findPrimeAnswer(num);

  const yourAnswer = readlineSync.question('Your answer: ');
  return [answer, yourAnswer, answer === yourAnswer];
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainGamesPrime = () => runGame(gameDescription, isPrime);

export default brainGamesPrime;
