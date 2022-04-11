import greeting from './cli.js';

/**
 * @param {string} gameDescription
 * @param {CallableFunction} gameMechanics
 * @return {void}
 */
function runGame(gameDescription, gameMechanics) {
  const numberOfTry = 3;
  console.log('Welcome to the Brain Games!');
  const name = greeting();
  console.log(gameDescription);

  let i = null;

  for (i = 0; i < numberOfTry; i += 1) {
    const [answer, yourAnswer, res] = gameMechanics();

    if (!res) {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
  }

  if (i === numberOfTry) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default runGame;
