const obj = {
  name: "Abhi",
  age: "55",
  last: "singh",
};
// for -- of is worked on array or iterable.
// so this will not work. we need to use for-- in loop
//for (let p of person) //TypeError: person is not iterable
for (let p in obj) {
  console.log(p + " : " + obj[p]);
}

console.log("normal  for loop");
for (let i; i <= 3; i++) {
  console.log(i + " : " + obj[i]);
}

const arr = ["orange", "mango", "apple", "banana"];

// if we run for-- in loop then we can access index of array.
for (let a in arr) {
  console.log(arr[a]);
}
