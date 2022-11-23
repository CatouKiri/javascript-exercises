const leapYears = function(given) {
    if(given % 4 === 0 && String(given / 4).slice(-1) != 5){
      return true;
    }
    else{
      return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
