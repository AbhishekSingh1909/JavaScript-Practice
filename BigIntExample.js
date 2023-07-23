let x = 2.01;

console.log(Math.floor(2.01)); // op - 2

let y = BigInt(Number.MAX_SAFE_INTEGER);
console.log(Math.floor(y)); // Math does not work with BigInt
