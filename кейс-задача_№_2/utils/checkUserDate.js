const {CURRENT_DATE, DATE_FROM_THE_FUTURE_ERROR_MESSAGE} = require('../constants.js')

const checkUserDate = userDate => {
    if(userDate.setHours(0, 0, 0, 0) > CURRENT_DATE.setHours(0, 0, 0, 0)) {
        throw DATE_FROM_THE_FUTURE_ERROR_MESSAGE
    }
}

module.exports = checkUserDate
