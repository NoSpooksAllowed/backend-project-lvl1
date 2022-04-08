import readlineSync from 'readline-sync';

/**
 * @return {void}
 */
function greeting() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export default greeting;
