const checkLeapYear = date => {
    const year = date.getFullYear()

    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}

module.exports = checkLeapYear
