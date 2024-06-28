export const getRandomTwoItems = (array: any) => {
  const length = array.length;

  if (length < 2) {
    return array;
  }

  const firstIndex = Math.floor(Math.random() * length);

  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * length);
  } while (secondIndex === firstIndex);

  const firstItem = array[firstIndex];
  const secondItem = array[secondIndex];

  return [firstItem, secondItem];
};
