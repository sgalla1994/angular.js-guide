// Code goes here
//Introduction - JS Patterns 
//
var work = function() {
  console.log("working hard...!");
};

var doWork = function(f) {

  console.log("starting");

  try {
    f();
  } catch (ex) {
    console.log(ex);
  }
  console.log("end");
};

doWork(work);
//
//
//
//
//
//Modules 
//Immediately Invoked Function Expression (IIFE)

(function() {

  var createWorker = function() {

    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log("task1 " + workCount);
    };

    var task2 = function() {
      workCount += 1;
      console.log("task2 " + workCount);
    };

    return {
      job1: task1,
      job2: task2
    };
  };

  var worker = createWorker();

  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
}());
//
//
//
//
//
//The IIFE