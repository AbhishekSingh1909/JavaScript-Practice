const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
doSomething(obj);
// Dot notation
obj.name = "Simon";
const name = obj.name;

console.log(obj);

// Bracket notation
obj["name"] = "Simon1";
const name1 = obj["name"];

console.log(obj);

// Can use a variable to define a key
// const prompt = require("prompt-sync")();
// const userName = prompt("what is your key?");
// obj[userName] = prompt("what is its value?");
console.log(obj);

console.log(obj.details.color);

obj["details"]["size"] = 14;
console.log(obj);

function doSomething(o) {
  o.x = 1;
}

console.log(obj); // 1

//
const me = {};
console.log(me);
const skillMe = me;
console.log(skillMe);
me.name = "Abhishek";
console.log(skillMe.name);
