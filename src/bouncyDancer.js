var bouncyDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, 1000);
  this.$node.addClass('bouncyDancer');
};

bouncyDancer.prototype = Object.create(dancer.prototype);
bouncyDancer.prototype.constructor = bouncyDancer;

bouncyDancer.prototype.step = function() {
  
  dancer.prototype.step.call(this);
  this.$node.toggle();
};