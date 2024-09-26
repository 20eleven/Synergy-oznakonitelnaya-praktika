const {CONSOLE_NUMBERS} = require('../constants.js')

const formatDateToConsole = date => {
    const consoleResult = []

    date.toLocaleDateString('ru').split('').forEach(value => {
        CONSOLE_NUMBERS[Number(value) || value === '0' ? value : 'separator'].forEach((element, index) => {
            consoleResult[index] = `${consoleResult[index] ? consoleResult[index] : ''}${element} `
        })
    })

    return () => consoleResult.forEach(element => {
        console.log(element)
    })
}

module.exports = formatDateToConsole
