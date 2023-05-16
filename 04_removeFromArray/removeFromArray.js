const removeFromArray = function (firstArray, ...toRemove) {
  let newArray = [];

  firstArray.forEach((val) => {
    if (!toRemove.includes(val)) {
      newArray.push(val);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
