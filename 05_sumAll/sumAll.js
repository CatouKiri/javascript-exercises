const sumAll = function() {
    let mintype = typeof(arguments[0]);
    let maxtype = typeof(arguments[1]);
    let min = Math.min(...arguments);
    let max = Math.max(...arguments);
    let sum = min;
    if(min > 0 && max > 0 && maxtype === 'number' && mintype === 'number'){
        while(min < max){
            sum += (min + 1);
            min++;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
