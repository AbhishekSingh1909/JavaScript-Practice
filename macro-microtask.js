console.log("1");
setTimeout(() => {
  console.log("2");
}); // 1st macro task with conent console.log("2");
Promise.resolve().then(() => console.log(3));

const print = new Promise((resolve, rejet) => {
  setTimeout(() => {
    resolve("promised resolved");
  });
});

Promise.resolve().then(() => setTimeout(() => console.log(4)));
print.then((message) => {
  console.log(message);
});

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
