function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(a, b) {
  return a + b
};

Calculator.prototype.subtract = function(a, b) {
  return a - b
};

Calculator.prototype.multiply = function(a, b) {
  return a * b
};

Calculator.prototype.divide = function(a, b) {
  return a / b
}
exports.calculatorModule = Calculator;
