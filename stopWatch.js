function StopWatch() {
  let startTime, stopTime, running;
  let duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("can't start the watch. Watch Already running");
    }

    startTime = new Date();
    running = true;
  };

  this.stop = function () {
    if (!running) {
      throw new Error("can't stop the watch. Watch Already stop");
    }

    stopTime = new Date();
    running = false;
    duration += (stopTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      debugger;
      if (typeof value !== "number" && isNaN(value)) {
        throw new Error(+" is not a numaric value");
      }
      duration = +value;
    },
  });
}
