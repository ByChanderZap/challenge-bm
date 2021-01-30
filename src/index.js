const format = require('./utils/formatMults');

const challenge = () => {
    let result = []
    for (let i = 1; i <= 100; i++) {
        result.push(format(i))
    }
    return result
}

module.exports = challenge