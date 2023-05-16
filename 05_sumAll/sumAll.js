const sumAll = function (firstNum, secondNum) {
  let numArray = [];

  if (firstNum < 0 || secondNum < 0) {
    return "ERROR";
  } else if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
    return "ERROR";
  } else if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
      numArray.push(i);
    }
  } else {
    for (let int = secondNum; int <= firstNum; int++) {
      numArray.push(int);
    }
  }

  let sum = numArray.reduce((partialSum, a) => partialSum + a, 0);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
