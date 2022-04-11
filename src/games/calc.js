import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomNumber from '../random.js';

const ops = ['-', '+', '*'];

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} op
 * @return {number|null}
 */
function evalExpression(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
}

/**
 * @return {Array}
 */
function isEqualCalc() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const op = ops[getRandomNumber(0, 3)];
  console.log(`Question: ${num1} ${op} ${num2}`);

  const answer = evalExpression(num1, num2, op);
  const yourAnswer = Number(readlineSync.question('Your answer: '));
  return [answer, yourAnswer, answer === yourAnswer];
}

const gameDescription = 'What is the result of the expression?';

const brainGamesCalc = () => runGame(gameDescription, isEqualCalc);

export default brainGamesCalc;
