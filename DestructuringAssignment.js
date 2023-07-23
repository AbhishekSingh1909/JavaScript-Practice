const numbers = [];
const obj = { a: 1, b: 2 };
//Note: The parentheses ( ... ) around the assignment statement are required when using object literal
//destructuring assignment without a declaration.
console.log(({ a: numbers[0], b: numbers[1] } = obj));

console.log(numbers);

//Each destructured property can have a default value.
//The default value is used when the property is not present, or has value undefined.
//It is not used if the property has value null.
//const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null

//console.log("a :" + a);
console.log("b :" + b);

console.log("c :" + c);

const obj1 = { a: 1, b: { c: 2 } };
const { a } = obj1; // a is constant
let {
  b: { c: d },
} = obj1; // d is re-assignable

console.log(obj1);
console.log("a1 :" + a);

console.log(b);
