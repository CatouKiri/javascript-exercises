const sumAll = function() {
let min = arguments[0];
let max = arguments[1];
let a = min;
while(min < max){
    a = a + (min + 1);
    min++;
}
return a;
};

// Do not edit below this line
module.exports = sumAll;
