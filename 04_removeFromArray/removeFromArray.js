const removeFromArray = function() {
let wholeArrayLength = arguments.length;
let firstArrayLength = arguments[0].length;
  for(let i = 1; i < wholeArrayLength; i++){
    for(let a = 0; a < firstArrayLength; a++){
      if(arguments[0][a] === arguments[i]){
        arguments[0].splice(a,1);
      }
    }
  }
return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
