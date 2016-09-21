var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left);
  this.top = top;
  this.left = left;
  this.$node.addClass('deadpoolDancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
//  return makeBlinkyDancer;
};

// makeBlinkyDancer = new makeDancer(top, left, timeBetweenSteps);

makeBlinkyDancer.prototype = Object.create(dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

// makeBlinkyDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
  
//   dancer.prototype.step.call(this);
//   // makeDancer.prototype.step();
//   // makeDancer.prototype.step.call();

//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };

makeBlinkyDancer.prototype.lineUp = function() {

  var styleSettings = {
    bottom: 0,
    left: 0,
  };
  this.$node.css(styleSettings);
};