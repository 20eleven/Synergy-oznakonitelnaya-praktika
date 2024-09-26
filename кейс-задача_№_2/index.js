const {
    getUserWeekday,
    checkLeapYear,
    getUserAge,
    formatDateToConsole,
    rl,
    setConsoleQuestion,
    checkUserDate,
} = require('./utils')
const {questionsSettings} = require('./settings.js')

const main = async () => {
    try {
        const day = await setConsoleQuestion(questionsSettings.day)
        const month = await setConsoleQuestion(questionsSettings.month)
        const year = await setConsoleQuestion(questionsSettings.year)
        const date = new Date(year, month - 1, day)

        checkUserDate(date)

        const weekday = getUserWeekday(date)
        const isLeapYear = checkLeapYear(date)
        const age = getUserAge(date)
        const logDate = formatDateToConsole(date)

        console.log(`День недели: ${weekday}`)
        console.log(`Был ${isLeapYear ? 'в' : 'не в'}исокосный год`)
        console.log(`Ваш текущий возрвст: ${age}`)
        logDate()
    } catch (error) {
        console.error(error)
    }

    rl.close()
}

main()
