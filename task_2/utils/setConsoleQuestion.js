const {rl} = require('./index.js')
const {VALIDATION_ERROR_MESSAGE} = require('../constants.js')

const setConsoleQuestion = ({question, validationCallback}) => new Promise((resolve, reject) => {
    rl.question(`${question} `, answer => {
        const numAnswer = Number(answer)
        if (answer === '' || !validationCallback(numAnswer)) {
            reject(VALIDATION_ERROR_MESSAGE)
        }
        resolve(numAnswer)
    })
})

module.exports = setConsoleQuestion
