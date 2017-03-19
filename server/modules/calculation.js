var doCalculation = function (value1, value2, calNum) {
  if (calNum == "+") {
    var add = value1 + value2;
    return add;
  } else if (calNum == "-") {
    var substract = value1 - value2;
    return substract;
  } else if (calNum == "*") {
    var multiply = value1 * value2;
    return multiply;
  } else if (calNum == "/") {
    var divide = value1 / value2;
    return divide;
  }
};

doCalculation();

module.exports = doCalculation;
