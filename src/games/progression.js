import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomNumber from '../random.js';

/**
 * @return {Array.<number>}
 */
function generateProgression() {
  let begin = getRandomNumber(2, 20);
  const step = getRandomNumber(2, 5);
  const length = getRandomNumber(5, 15);

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(begin);
    begin += step;
  }

  return progression;
}

/**
 * @param {Array.<number>} progression
 * @param {number} hideNum
 * @return {void}
 */
function printProgression(progression, hideNum) {
  for (let i = 0; i < progression.length; i += 1) {
    if (i === hideNum) {
      process.stdout.write('.. ');
    } else if (progression.length - i === 1) {
      process.stdout.write(`${progression[i]}`);
    } else {
      process.stdout.write(`${progression[i]} `);
    }
  }
  process.stdout.write('\n');
}

/**
 * @return {Array}
 */
function isRightNumInProgression() {
  const progression = generateProgression();
  const hideNum = getRandomNumber(0, progression.length - 1);
  process.stdout.write('Question: ');
  printProgression(progression, hideNum);

  const answer = progression[hideNum];

  const yourAnswer = Number(readlineSync.question('Your answer: '));
  return [answer, yourAnswer, answer === yourAnswer];
}

const gameDescription = 'What number is missing in the progression?';

const brainGamesProgression = () => runGame(gameDescription, isRightNumInProgression);

export default brainGamesProgression;
