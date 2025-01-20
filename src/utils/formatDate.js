export const formatDate = (dateStr) => {
  const dateObj = new Date(dateStr);
  const date = dateObj.getDate() + 1;
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${date}.${month}.${year} ${hours}:${minutes}`;
};
