// create an object by object literals
const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

// invoke the objects
circle.draw();

//Constructor Function

function Circle(radius) {
  // define some private properties
  let defaultLocation = { x: 1, y: 2 };
  this.radius = radius;
  let computeOptimamLocation = function () {
    console.log(
      "defaultLocation :(",
      defaultLocation.x,
      defaultLocation.y + ")"
    );
  };
  //clouser to access variable of outer function
  this.draw = function () {
    computeOptimamLocation();
    console.log("draw");
  };
}

// create an object with new operator

const circle1 = new Circle(1);

circle1.draw();

// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// // create an object

const circle2 = createCircle(1);

//enumarate on objects properties

for (let key in circle) {
  console.log(key + " : " + circle[key]);
}

// in operator is used to access key of properties

if ("radius" in circle) {
  console.log("Yes radius is circle property");
}

// use type of operator to get type of property

console.log("type of draw is " + typeof circle["draw"]);

let x = 10;
let y = x;
x = 20;

// primitive

let number = 10;
function increase(number) {
  number = ++number;
}

//call

increase(number);

//op= number - 10.

// reference

let obj = { value: 10 };
function increase1(obj) {
  obj.value = ++obj.value;
}

//call

increase1(obj);

//obj.value - 11.

// dynamic added property
circle.location = { x: 1 };

// delete property

delete circle.location;
// delete radius property of circle
delete circle.radius;
