import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomNumber from '../random.js';

/**
 * @return {Array}
 */
function isPrime() {
  const num = getRandomNumber(1, 100);
  console.log(num);

  const answer = ((a) => {
    if (a <= 1) {
      return 'no';
    }
    for (let i = 2; i < a; i += 1) {
      if (a % i === 0) {
        return 'no';
      }
    }

    return 'yes';
  })(num);

  const yourAnswer = readlineSync.question('Your answer: ');
  return [answer, yourAnswer, answer === yourAnswer];
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainGamesPrime = () => runGame(gameDescription, isPrime);

export default brainGamesPrime;
