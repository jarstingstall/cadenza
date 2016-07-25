'use strict';

let interval = require('./interval');
let allowedRoots = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'Bb', 'B', 'Cb'];

class Chord {
    constructor(root) {
        if (allowedRoots.indexOf(root) != -1) {
            this.root = root;
        } else {
            throw new Error('Invalid chord root provided.');
        }
    }

    major() {
        this.third = interval(this.root).majorThird();
        this.fifth = interval(this.third).minorThird();

        return this;
    }

    minor() {
        this.third = interval(this.root).minorThird();
        this.fifth = interval(this.third).majorThird();

        return this;
    }

    diminished() {
        this.third = interval(this.root).minorThird();
        this.fifth = interval(this.third).minorThird();

        return this;
    }

    augmented() {
        this.third = interval(this.root).majorThird();
        this.fifth = interval(this.third).majorThird();

        return this;
    }

    notes() {
        return [this.root, this.third, this.fifth];
    }
}

module.exports = function(root) {
    return new Chord(root);
};