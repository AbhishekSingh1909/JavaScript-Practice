const sum = ((...args) => {
  let sum = 0;

  for (let i of args) {
    sum += i;
  }
  return sum;
})(10, 20, 30, 50);

console.log(sum);
