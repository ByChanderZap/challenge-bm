const format = require('./utils/formatMults');

const challenge = () => {
    let result = []
    for (let i = 1; i <= 100; i++) {
        result.push(format(i))
    }
    console.log(result)
    return result
}

module.exports = challenge
