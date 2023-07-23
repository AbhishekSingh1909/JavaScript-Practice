//for hoisted variable should be var type. because var does not create block scoped variable
y = 20;
checkValue(y, "var variable :");
checkValue(x, "let variable :");
// if (x) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

function checkValue(x, message) {
  console.log(message.concat(x));
}

let x = 10;

var y = 20;
const z = 30;
