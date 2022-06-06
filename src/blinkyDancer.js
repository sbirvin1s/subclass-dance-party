// refactor into pseudoclassical instantiation

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;

  Dancer.call(this);
  // this.oldStep = this.step();

};

BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.step = function() {
  oldStep();
  this.$node.toggle();
};

// BlinkyDancer.prototype.oldStep = this.step();
// add a call function
// set makeBlinkyDancer's prototype
// set makeBlinkDancer's constructor
// add the step method to the prototype
// factor out all methods of makeBlinkyDancer

var blinky = new BlinkyDancer();
console.log('blinky:', blinky, 'typeof:', typeof BlinkyDancer.$node);