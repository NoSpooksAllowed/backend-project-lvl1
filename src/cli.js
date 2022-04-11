import readlineSync from 'readline-sync';

/**
 * @return {string}
 */
function greeting() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export default greeting;
