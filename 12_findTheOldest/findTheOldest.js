const findTheOldest = function(people) {
    let c = 0;
    for(let i = 0; i < people.length-1; i++){
        // declare death
        let death1 = people[i].yearOfDeath;
        let death2 = people[i+1].yearOfDeath;
        // if persons death is not defined use current year
        if(death1 === undefined){
            const d = new Date();
            death1 = d.getFullYear();
        }
        else if(death2 === undefined){
            const d = new Date();
            death2 = d.getFullYear();
        }
        // first age - person a = people[0]
        age1 = death1 - people[i].yearOfBirth;
        // second age - person b = people[1]
        age2 = death2 - people[i+1].yearOfBirth
        // compare first and second person
        if(age1 <  age2){
        // if second person is oldest c++
        c++;
        }
        // if first person is oldest - no change
    }

    return people[c];
};

// Do not edit below this line
module.exports = findTheOldest;
