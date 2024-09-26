const {checkIsPositiveInt} = require('./utils')
const {QUESTIONS, MAX_NUMBERS_OF_DAYS, MAX_NUMBERS_OF_MONTHS} = require('./constants')

const questionsSettings = {
    day: {
        question: QUESTIONS.day,
        validationCallback: answer => checkIsPositiveInt(answer) && answer <= MAX_NUMBERS_OF_DAYS,
    },
    month: {
        question: QUESTIONS.month,
        validationCallback: answer => checkIsPositiveInt(answer) && answer <= MAX_NUMBERS_OF_MONTHS,
    },
    year: {
        question: QUESTIONS.year,
        validationCallback: answer => checkIsPositiveInt(answer),
    },
}

module.exports.questionsSettings = questionsSettings
