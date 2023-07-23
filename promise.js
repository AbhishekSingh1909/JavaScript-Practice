function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise((myResolve, myReject) => {
  let x = 1;
  // some code (try to change x to 5)

  setTimeout(function change() {
    if (x == 0) {
      myResolve("OK");
      x = 1;
    } else {
      myReject("Error");
    }

    setTimeout(change, 1000);
  }, 1000);
});

console.log(myPromise);

myPromise
  .then(
    function (value) {
      myDisplayer(value);
    },
    function (error) {
      myDisplayer(error);
    }
  )
  .catch((err) => {
    myDisplayer(err);
  });

// let timerId = setTimeout(function tick() {
//   alert("tick");
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
