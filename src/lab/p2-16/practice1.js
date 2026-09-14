export function makeCounter() {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
}

const x = makeCounter();

const y = x();
console.log(y);