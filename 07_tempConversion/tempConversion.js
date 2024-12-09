const convertToCelsius = function(temperature) {
  let newtemp = (temperature - 32) * 5 / 9;
  return Math.round(newtemp * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let newtemp = temperature * 9 / 5 + 32;
  return Math.round(newtemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
