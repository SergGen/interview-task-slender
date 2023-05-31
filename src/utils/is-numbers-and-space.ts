export const isNumbersAndSpace = (enteredText: string): boolean => {
  const arrEnteredText = enteredText.split(' ');
  if (arrEnteredText.at(-1) === '-') {
    return true;
  }
  return arrEnteredText.every((value) => !isNaN(Number(value)));
};
