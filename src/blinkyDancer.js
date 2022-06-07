var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = Dancer.prototype.step;
  // console.log('this.oldStep:', this.oldStep);


  // console.log('thisBlinky:', this);

};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  // console.log('this4:', this);
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(timeBetweenSteps);
  this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  blinkyDancer.$node.toggle();


  // ---- Potential Refactor ----
  // let oldStep = Object.create(Dancer.prototype.step);
  // oldStep();
  // this.$node.toggle();
};

var blink = new BlinkyDancer (12, 20);

// base case : oldStep !== this.step()