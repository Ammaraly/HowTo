const validator = require('validator')
const yargs = require('yargs')

const notes = require('./notes')

yargs.command({
    command: ["add", "a"],
    describe: "Adds a brand new note",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: 'string',
            alias: 't'
        },
        body: {
            desc: "Note body",
            demandOption: true,
            type: 'string',
            alias: 'b'
        }
    },
    handler: notes.addNote
})

yargs.command({
    command: ["remove", "rm"],
    describe: "Removes a note",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: 'string',
            alias: 't'
        },
    },
    handler: notes.removeNote
})

yargs.command({
    command: ["list", "l"],
    describe: "Lists all note",
    handler: notes.listNotes
})

yargs.command({
    command: ["read", "r"],
    describe: "Opens a note for reading",
    builder: {
        title: {
            desc: "Note title",
            demandOption: true,
            type: 'string',
            alias: 't'
        },
    },
    handler: notes.readNote
})

yargs.parse();