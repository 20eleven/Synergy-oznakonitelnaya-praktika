const {CURRENT_DATE} = require('../constants.js')

const getUserAge = userDate => {
    const month = CURRENT_DATE.getMonth() - userDate.getMonth()
    const age = CURRENT_DATE.getFullYear() - userDate.getFullYear()

    if (month < 0 || (month === 0 && CURRENT_DATE.getDate() < userDate.getDate())) {
        return age - 1
    }

    return age
}

module.exports = getUserAge
