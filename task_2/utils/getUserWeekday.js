const getUserWeekday = date => date.toLocaleDateString('ru', {weekday: 'long'})

module.exports = getUserWeekday