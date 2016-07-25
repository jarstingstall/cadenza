'use strict';

let letters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let notes = [['B#', 'C'], ['C#', 'Db'], 'D', ['D#', 'Eb'], ['E', 'Fb'], ['E#', 'F'], ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], ['B', 'Cb']];

/**
 *
 * @param root {string} The root note of the interval
 * @param semiTones {number} Number of semiTones between root note and target note
 * @param steps {number} Number of scale degrees between root note and target note
 * @returns {string}
 */
let getTargetNote = (root, semiTones, steps) => {
    let rootIndex = '';
    notes.forEach((note, i) => {
        if (Array.isArray(note)) {
            if (note.indexOf(root) != -1) {
                rootIndex = i;
            }
        } else if (note == root) {
            rootIndex = i;
        }
    });

    let index = rootIndex + semiTones;
    if (index > notes.length - 1) {
        index = index - notes.length;
    }
    let note = notes[index];

    if (Array.isArray(note)) {
        return getProperAccidental(root, note, steps);
    } else {
        return note;
    }
};

let getProperAccidental = (root, note, steps) => {
    let index = letters.indexOf(root.charAt(0)) + steps;
    if (index > letters.length - 1) {
        index = index - letters.length;
    }
    let letter = letters[index];
    return note.filter(note => {
        return note.charAt(0) === letter;
    })[0];
};

class Interval {
    constructor(root) {
        this.root = root;
    }

    minorThird() {
        return getTargetNote(this.root, 3, 2);
    }

    majorThird() {
        return getTargetNote(this.root, 4, 2);
    }
}

module.exports = function(root) {
    return new Interval(root);
};