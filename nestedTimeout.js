console.log("outside setTimeout1");
setTimeout(() => {
  console.log("inside parent1 setTimeout1");
  setTimeout(() => {
    console.log("inside parent2 setTimeout1");
    setTimeout(() => {
      console.log("inside child setTimeout");
    }, 3000);
    console.log("inside parent2 setTimeout2");
  }, 2000);
  console.log("inside parent1 setTimeout2");
}, 1000);
console.log("outside setTimeout2");
