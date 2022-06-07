var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
makeBlinkyDancer.prototype.step = function() {
  // console.log('this4:', this);
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep(this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

var blink = new makeBlinkyDancer (12, 20, 1000);
console.log('blink: ', blink);