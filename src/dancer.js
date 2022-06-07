// Creates and returns a new dancer object that can step
let timeBetweenSteps = 100;
var makeDancer = function(top, left, timeBetweenSteps) { // parent CLASS

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // console.log('whos is this dancer: ', this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
};


makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
  // let whoSteps = this;

  // setTimeout(function() {
  //   console.log('whoSteps:', whoSteps);
  //   console.log('what is this.step: ', typeof Dancer.prototype.step);
  //   this.step();
  // }, this.timeBetweenSteps);


  // setTimeout(function() { this.step.bind(this); }, this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


// var dance = new Dancer(10, 20, timeBetweenSteps);
// console.log('dance:', dance);