const reverseString = function (words) {
  let wordsArray = words.split("");
  let reverseWordsArray = wordsArray.reverse();
  let joinedArray = reverseWordsArray.join("");

  return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
