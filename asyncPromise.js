let print3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3");
      resolve("print3 promise has resolved");
    }, 100);
  });
};

const print = async () => {
  console.log("1");
  setTimeout(() => {
    console.log("5");
  }, 200);
  return new Promise((resolve, reject) => {
    console.log("2");
    print3()
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
    resolve("print promise has resolved");
    console.log("4");
  }).then((message) => {
    console.log(message);
  });
};

const start = async () => {
  print();
  console.log("done");
};

start();
