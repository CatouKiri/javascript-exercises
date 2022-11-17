const repeatString = function(string, num) {
    if(string === '' || num === 0){
        string = '';
        num = 0;
    }
    else if(num > 0){
        for (let i = 1; i < num; i++) {
            string += 'hey';
        }
    }
    else if(num < 0){
        string = 'ERROR';
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
