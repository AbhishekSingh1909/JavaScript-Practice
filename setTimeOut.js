// (() => {
//   console.log("started from here");
//   setTimeout(() => {
//     console.log("set time out");
//     console.log("set time will display after zero second");
//   }, 200);

//   setTimeout(() => {
//     console.log("run with delay of zero second");
//   });
//   console.log("ends here");
// })();

let intervalId = setInterval(() => {
  console.log("Sale ends soon. BUY NOW!");
}, 200);

setTimeout(() => {
  console.log("sales has ended.");
  clearTimeout(intervalId);
}, 1000);
