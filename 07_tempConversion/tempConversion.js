const convertToCelsius = function (fTemp) {
  let tempC = (fTemp - 32) * (5 / 9);

  let newCelTemp = Math.round(tempC * 10) / 10;
  return newCelTemp;
};

const convertToFahrenheit = function (cTemp) {
  let tempF = cTemp * (9 / 5) + 32;

  let newFahrTemp = Math.round(tempF * 10) / 10;
  return newFahrTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
