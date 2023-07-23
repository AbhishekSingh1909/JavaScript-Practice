var timer = null,
  interval = 1000,
  value = 0;

function onStart() {
  if (timer !== null) return;
  timer = setInterval(function () {
    value = value + 1;
    console.log(value);
    console.log(document.getElementById("input"));

    document.getElementById("input").value = value;
  }, interval);
}

function onStop() {
  clearInterval(timer);
  timer = null;
}
