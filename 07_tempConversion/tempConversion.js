const ftoc = function() {

  let farenheit = ((arguments[0] - 32) * (5/9));
  return Math.round(farenheit * 10) / 10;

};

const ctof = function() {

  let celsius = (arguments[0] * (9/5)) + 32;

  return Math.round(celsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
