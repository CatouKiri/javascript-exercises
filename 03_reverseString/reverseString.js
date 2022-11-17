const reverseString = function(string) {
let array = string.split("");
array = array.reverse();
array = array.join("");
return array.toString();
};

// Do not edit below this line
module.exports = reverseString;
