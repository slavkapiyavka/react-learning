const getRandomInteger = (min = 1, max = 10) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

export default {getRandomInteger, getRandomColor};