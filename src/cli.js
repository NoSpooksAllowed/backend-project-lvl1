import readlineSync from "readline-sync";

/**
 * @return {void}
 */
export function greeting() {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
}
