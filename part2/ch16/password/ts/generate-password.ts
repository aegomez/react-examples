const SPECIALS = '!@#$%^&*()_+{}:"<>?\|[]\',./`~';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const ALL = `${SPECIALS}${LOWERCASE}${UPPERCASE}${NUMBERS}`;

const getIterable = (length: number) =>
  Array.from({length}, (_, index) => index + 1);

const pick = (set: string, min: number, max?: number) => {
  let length = min;

  if (max !== undefined) {
    length += Math.floor(Math.random() * (max - min))
  }

  return getIterable(length).map(() => (
    set.charAt(Math.floor(Math.random() * set.length))
  )).join('');
};

const shuffle = (set: string) => {
  let array = set.split('');
  let length = array.length;

  let iterable = getIterable(length).reverse();

  let shuffled = iterable.reduce((acc, val) => {
    let randomIndex = Math.floor(Math.random() * val);

    [acc[val - 1], acc[randomIndex]] = [acc[randomIndex], acc[val - 1]];
    
    return acc;
  }, [...array]);

  return shuffled.join('');
};

export default () => {
  let password = pick(SPECIALS, 1)
    + pick(LOWERCASE, 1)
    + pick(UPPERCASE, 1)
    + pick(NUMBERS, 1)
    + pick(ALL, 4, 12);
  
  return shuffle(password);
}