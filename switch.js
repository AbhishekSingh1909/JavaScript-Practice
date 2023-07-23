function checkCase(num) {
  switch (num) {
    case 1:
      console.log(typeof num);
      console.log(typeof (num % 1) + " : " + (num % 1));
      console.log(typeof (num + 1) + " : " + (num + 1));
      break;

    case 2:
      console.log(typeof num);
      console.log(typeof (num * 1) + " : " + num * 1);
    default:
      console.log(typeof num);
      console.log(typeof (num / 1) + " : " + num / 1);
  }
}

checkCase(1);
