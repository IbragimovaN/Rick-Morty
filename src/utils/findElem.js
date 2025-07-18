export const findElem = (arr, id) => {
  const current = arr.find((item) => item.id == id);

  return current;
};
