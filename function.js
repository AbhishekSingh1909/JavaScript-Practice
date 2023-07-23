const add = (x, y) => {
  console.log("x: " + x, "y : " + y);
  return x + y;
};

console.log(add(2, 3, 4));

function myFun(a, b, ...manyMoreArgs) {
  arguments[0] = 6;
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun(1, 2, "one", "two", "three");

//A function definition can only have one rest parameter, and
//the rest parameter must be the last parameter in the function definition.
function wrong1(one, ...wrong) {}
