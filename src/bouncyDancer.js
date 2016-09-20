var bouncyDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, 10);
  console.log(this+" "+top+" "+left);
  this.$node = $('<span class="bouncyDancer"></span>');
};

bouncyDancer.prototype = Object.create(dancer.prototype);
bouncyDancer.prototype.constructor = bouncyDancer;

bouncyDancer.prototype.step = function() {
  
  dancer.prototype.step.call(this);
  this.$node.toggle();
};