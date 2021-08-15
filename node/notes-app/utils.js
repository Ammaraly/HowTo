const chalk = require('chalk')

const log = console.log;
const info = chalk.bold.yellow
const error = chalk.bold.red
const success = chalk.bold.green

module.exports = {
    log,
    info,
    error,
    success
}