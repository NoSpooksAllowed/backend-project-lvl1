import readlineSync from "readline-sync";
import runGame from "../index.js";

/**
 * @return {bool}
 */
function isEven() {
  const num = readlineSync.question("Question: ");
  const answer = num % 2 === 0 ? "yes" : "no";
  const yourAnswer = readlineSync.question("Your answer: ");

  return answer === yourAnswer;
}

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const brainGamesEven = () => runGame(gameDescription, isEven);

export default brainGamesEven;
