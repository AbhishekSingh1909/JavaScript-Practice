const arr = [1, 2, 3];

// arr.forEach((element) => {
//   console.log(element);
// });

arr[4] = 5;

console.log(arr);

arr.forEach((element) => {
  console.log(element);
});

arr.length = arr.length + 2;
console.log(arr);

for (let e of arr) {
  console.log(e);
}

for (let e in arr) {
  console.log(e);
}
// const mapped = arr.map((i) => i);
// console.log(mapped);

// //arr.forEach((i) => console.log(i)); // 1 2 5
// const filtered = arr.filter((x) => !x);
// console.log(filtered);
// // Spreading into an object uses property enumeration, not the array's iterator
// let objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
// console.log(typeof objectSpread);
// console.log(objectSpread);
// objectSpread = [...arr]; // { '0': 1, '1': 2, '4': 5 }
// console.log(objectSpread);

const arr1 = [1, 2, 3, "Hi"];
arr1["name"] = "Abhishek";
console.log("new array");
for (let e of arr1) {
  console.log(e);
}
console.log("for.. in");
for (let e in arr1) {
  console.log(e);
}

console.log("foreach");
arr1.forEach((element) => {
  console.log(element);
});

console.log("associate array");
for (let e in arr1) {
  console.log(e + " : " + arr1[e]);
}
