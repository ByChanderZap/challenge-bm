/* 
    The reason why im doing this is really simple, for each value that this function recibe, try to see if that value its actually a multiple of 3, 5 or both, so, when is finded a number that has not remainder (which means its a multiple of our rules) i 'check' using a simple sum with who of them actually is his multiple.
    
    if only 3 is multiple, so the value of the add at the end will be 3, same cases for 5 and 8 this last one is the add between 3 and 5, if the value is not a multiple of our rules, at the end add will be 0. 
    
    i know that it is an exponential solution, but that is not part of the challenge
*/

const whichOne = (value) => {
    let requirements = [3, 5]
    let add = 0
    requirements.forEach(requirement => {
        if (value % requirement === 0) {
            add += requirement
        }
    })
    return add
}

module.exports = whichOne;