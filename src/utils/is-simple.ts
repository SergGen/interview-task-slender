import { isNatural } from './is-natural.ts';

export const isSimple = (number: number): boolean => {
  if (!isNatural(number)) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
