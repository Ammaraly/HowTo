const fs = require('fs');
const { log, error, info, success } = require('./utils');

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0) {
        log(error("No notes saved..."));
        return;
    }
    notes.forEach((note, index) => {
        log(success(`\nNote ${index}:`))
        log(info("Title:"), note.title)
    });
}

const readNote = ({ title }) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note === undefined) return log(error("Note not found!"));
    log(success(`\nNote:`))
    log(info("Title:"), note.title);
    log(info("Body:"), note.body);
}

const addNote = ({ title, body }) => {
    const notes = loadNotes();
    const isTitleTaken = notes.some((note) => note.title === title);
    if (isTitleTaken) return log(error("Title already taken!"));
    notes.push({ title, body });
    if (saveNotes(notes)) log(success("New note added!"));
}

const removeNote = ({ title }) => {
    const notes = loadNotes();
    const notesFiltered = notes.filter((note) => note.title !== title);
    if (notes.length === notesFiltered.length) {
        log(error("Note was not found!"));
        return;
    }
    if (saveNotes(notesFiltered)) log(success("Note removed"));
}

const saveNotes = (notes) => {
    try {
        fs.writeFileSync('./notes.json', JSON.stringify(notes));
        return true
    }
    catch (e) {
        log(error(e));
        return false
    };
}

const loadNotes = () => {
    try {
        const notes = JSON.parse(fs.readFileSync('./notes.json').toString());
        return notes;
    }
    catch (e) {
        return [];
    }
}

module.exports = { addNote, removeNote, listNotes, readNote };