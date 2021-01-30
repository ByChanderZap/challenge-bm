const whichOne = require('./whichIsMultiple');


const format = (value) => {
    let posibilities = {
        0: value,  
        3: 'Music',
        5: 'TI',
        8: 'Musical'
    }
    return posibilities[whichOne(value)];
}

module.exports = format;