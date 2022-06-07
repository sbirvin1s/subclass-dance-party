// Creates and returns a new dancer object that can step
// let timeBetweenSteps = 100;
var Dancer = function(top, left, timeBetweenSteps) { // parent CLASS

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  console.log('whos is this dancer: ', this);


  this.step();
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  dancer.$node.css(styleSettings);

  // ---- Potential Refactor ----
  // this.$node.css(styleSettings);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  console.log('this;', this);
  console.log('this.step:', this.step);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // setTimeout(function () { return this.step; }, timeBetweenSteps);

  // ---- Potential Refactor ----
  let whoSteps = this;
  setTimeout(function() { Dancer.prototype.step.bind(whoSteps); }, timeBetweenSteps);
  console.log('whoSteps: ', whoSteps);
  this.step();
};



// var makeDancer = function(top, left, timeBetweenSteps) {


//   // creates an object
//   // creates a  <span> element
//   // a function that
//     // runs setTimeout

// };
// var dance = new Dancer(10, 20, timeBetweenSteps);
var dance = new Dancer(10, 20);
console.log('dance:', dance);