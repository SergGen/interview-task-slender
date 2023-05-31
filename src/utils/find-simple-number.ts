import { isSimple } from './is-simple.ts';

export const findSimpleNumbers = (enteredText: string): string => {
  const enteredTextArr = enteredText.split(' ');
  return enteredTextArr
    .filter((value) => {
      const number = Number(value);
      return isSimple(number);
    })
    .join(' ');
};
