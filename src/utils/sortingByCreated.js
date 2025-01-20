export const SortingByCreated = (arr, searchString) => {
  if (searchString === "?sortByCreate=createdDESC") {
    arr.sort((a, b) => new Date(b.created) - new Date(a.created));
  } else if (searchString === "?sortByCreate=createdASC") {
    arr.sort((a, b) => new Date(a.created) - new Date(b.created));
  }
  return arr;
};
