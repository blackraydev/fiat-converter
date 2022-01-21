export const setPresition = (num: string) => {
  if (!num.includes('.') || num.split('.')[1].length <= 4) {
    return num;
  }

  return Number(num).toFixed(4).toString();
};
