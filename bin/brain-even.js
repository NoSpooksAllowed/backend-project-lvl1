#!/home/spook/.nvm/versions/node/v17.4.0/bin/node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

/**
 * @param {bool}
 */
function isEven() {
  const num = readlineSync.question('Question: ');
  const answer = num % 2 === 0 ? 'yes' : 'no';
  const yourAnswer = readlineSync.question('Your answer: ');

  return answer === yourAnswer;
}

const main = () => {
  console.log('Welcome to the Brain Games!');
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = null;

  for (i = 0; i < 3; i += 1) {
    const res = isEven();

    if (!res) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

main();
