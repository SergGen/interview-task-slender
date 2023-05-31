export const isNatural = (number: number): boolean => {
  return !(number < 1 || number % 1 !== 0);
};
