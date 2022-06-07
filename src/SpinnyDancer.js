var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;
makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.css('color', 'blue');
};
