var spidermanDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, 100);
  this.$node.addClass('spidermanDancer'); 
};

spidermanDancer.prototype = Object.create(dancer.prototype);
spidermanDancer.prototype.constructor = spidermanDancer;

spidermanDancer.prototype.step = function() {
  
  dancer.prototype.step.call(this);
  this.$node.toggle();
};