try {
  var e = new ReferenceError();
  var o = new Error();
  try {
    //throw new Error("opps");
    return console.log("done");
  } catch (e) {
    console.log("inner");
    console.error(e.message);
    console.error(e.stack);
    return;
  }
} catch (o) {
  console.log("outer");
  console.error(e.message);
} finally {
  console.log("finally");
}
