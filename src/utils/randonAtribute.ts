function getRandomInt(min: number, max: number) {
  const minimo = Math.ceil(min);
  const maximo = Math.floor(max);
  const number = Math.floor(Math.random() * (maximo - minimo) + minimo);
  console.log(number);
  return number;
}
export default getRandomInt;
