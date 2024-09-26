const checkIsPositiveInt = num => !!num && isFinite(num) && Number.isInteger(num) && num >= 1

module.exports = checkIsPositiveInt
