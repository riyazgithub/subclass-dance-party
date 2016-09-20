var superheroDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, 100);
  this.$node.addClass('superheroDancer'); 
};

superheroDancer.prototype = Object.create(dancer.prototype);
superheroDancer.prototype.constructor = superheroDancer;

superheroDancer.prototype.step = function() {
  
  dancer.prototype.step.call(this);
  this.$node.toggle();
};