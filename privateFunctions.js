const counter = (() => {
  let privateCounter = 0;

  function changeVal(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeVal(1);
    },

    decrement() {
      changeVal(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

//changeVal is a private method
//console.log(counter.changeVal());

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
