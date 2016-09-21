// var spidermanDancer = function(top, left, timeBetweenSteps) {
//   dancer.call(this, top, left);
//   this.top = top;
//   this.left = left;
//   this.$node.addClass('spidermanDancer');
// };


// spidermanDancer.prototype = Object.create(dancer.prototype);
// spidermanDancer.prototype.constructor = spidermanDancer;

// // spidermanDancer.prototype.step = function() {
  
// //   dancer.prototype.step.call(this);
// //   this.$node.toggle();
// // };
// spidermanDancer.prototype.lineUp = function() {

//   var styleSettings = {
//     left: 1500,
//     bottom: 0
//   };
//   this.$node.css(styleSettings);
// };
var spidermanDancer = class spidermanDancer extends dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.top = top;
    this.left = left;
    this.$node.addClass('spidermanDancer');
  }
  lineUp() {
    const styleSettings = {
      left: 1500,
      bottom: 0
    };
    this.$node.css(styleSettings);
  }
};

