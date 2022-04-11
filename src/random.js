/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function getRandomNumber(min, max) {
  return Number(Math.floor(Math.random() * (max - min) + min));
}

export default getRandomNumber;
