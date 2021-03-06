'use strict'

let assert = require('chai').assert
let chord = require('../src/chord')

describe('chord', () => {
    describe('constructor', () => {
        it('should return a new Chord instance with the root set', () => {
            let instance = chord('C')
            assert.equal(instance.root, 'C')
        })

        it('should throw an error if an invalid root is provided', () => {
            let createChord = () => chord('foobar')
            assert.throws(createChord)
        })
    })

    describe('major', () => {
        it('should set the notes of a C major triad and return the chord', () => {
            let instance = chord('C').major()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G')
        })

        it('should set the notes of a Db major triad and return the chord', () => {
            let instance = chord('Db').major()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'F')
            assert.equal(instance.fifth, 'Ab')
        })

        it('should set the notes of a D major triad and return the chord', () => {
            let instance = chord('D').major()
            assert.equal(instance.root, 'D')
            assert.equal(instance.third, 'F#')
            assert.equal(instance.fifth, 'A')
        })

        it('should set the notes of a B major triad and return the chord', () => {
            let instance = chord('B').major()
            assert.equal(instance.root, 'B')
            assert.equal(instance.third, 'D#')
            assert.equal(instance.fifth, 'F#')
        })

        it('should set the notes of a Cb major triad and return the chord', () => {
            let instance = chord('Cb').major()
            assert.equal(instance.root, 'Cb')
            assert.equal(instance.third, 'Eb')
            assert.equal(instance.fifth, 'Gb')
        })

        it('should set the notes of a C# major triad and return the chord', () => {
            let instance = chord('C#').major()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E#')
            assert.equal(instance.fifth, 'G#')
        })
    })

    describe('minor', () => {
        it('should set the notes of a C minor triad', () => {
            let instance = chord('C').minor()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'Eb')
            assert.equal(instance.fifth, 'G')
        })

        it('should set the notes of a C# minor triad', () => {
            let instance = chord('C#').minor()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G#')
        })

        it('should set the notes of a Bb minor triad', () => {
            let instance = chord('Bb').minor()
            assert.equal(instance.root, 'Bb')
            assert.equal(instance.third, 'Db')
            assert.equal(instance.fifth, 'F')
        })
    })

    describe('diminished', () => {
        it('should set the notes of a C diminished triad', () => {
            let instance = chord('C').diminished()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'Eb')
            assert.equal(instance.fifth, 'Gb')
        })

        it('should set the notes of a C# diminished triad', () => {
            let instance = chord('C#').diminished()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G')
        })

        it('should set the notes of a B diminished triad', () => {
            let instance = chord('B').diminished()
            assert.equal(instance.root, 'B')
            assert.equal(instance.third, 'D')
            assert.equal(instance.fifth, 'F')
        })

        it('should set the notes of a F diminished triad', () => {
            let instance = chord('F').diminished()
            assert.equal(instance.root, 'F')
            assert.equal(instance.third, 'Ab')
            assert.equal(instance.fifth, 'Cb')
        })
    })

    describe('augmented', () => {
        it('should set the notes of a C augmented triad', () => {
            let instance = chord('C').augmented()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G#')
        })

        it('should set the notes of a Db augmented triad', () => {
            let instance = chord('Db').augmented()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'F')
            assert.equal(instance.fifth, 'A')
        })
    })

    describe('maj7', () => {
        it('should set the notes of a Cmaj7 chord', () => {
            let instance = chord('C').maj7()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G')
            assert.equal(instance.seventh, 'B')
        })

        it('should set the notes of a C#maj7 chord', () => {
            let instance = chord('C#').maj7()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E#')
            assert.equal(instance.fifth, 'G#')
            assert.equal(instance.seventh, 'B#')
        })

        it('should set the notes of a Dbmaj7 chord', () => {
            let instance = chord('Db').maj7()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'F')
            assert.equal(instance.fifth, 'Ab')
            assert.equal(instance.seventh, 'C')
        })
    })

    describe('min7', () => {
        it('should set the notes of a Cmin7 chord', () => {
            let instance = chord('C').min7()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'Eb')
            assert.equal(instance.fifth, 'G')
            assert.equal(instance.seventh, 'Bb')
        })

        it('should set the notes of a C#min7 chord', () => {
            let instance = chord('C#').min7()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G#')
            assert.equal(instance.seventh, 'B')
        })

        it('should set the notes of a Dbmin7 chord', () => {
            let instance = chord('Db').min7()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'Fb')
            assert.equal(instance.fifth, 'Ab')
            assert.equal(instance.seventh, 'Cb')
        })
    })

    describe('dom7', () => {
        it('should set the notes of a C7 chord', () => {
            let instance = chord('C').dom7()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G')
            assert.equal(instance.seventh, 'Bb')
        })

        it('should set the notes of a C#7 chord', () => {
            let instance = chord('C#').dom7()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E#')
            assert.equal(instance.fifth, 'G#')
            assert.equal(instance.seventh, 'B')
        })

        it('should set the notes of a Db7 chord', () => {
            let instance = chord('Db').dom7()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'F')
            assert.equal(instance.fifth, 'Ab')
            assert.equal(instance.seventh, 'Cb')
        })
    })

    describe('min7b5', () => {
        it('should set the notes of a Cmin7b5 chord', () => {
            let instance = chord('C').min7b5()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'Eb')
            assert.equal(instance.fifth, 'Gb')
            assert.equal(instance.seventh, 'Bb')
        })

        it('should set the notes of a C#min7b5 chord', () => {
            let instance = chord('C#').min7b5()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G')
            assert.equal(instance.seventh, 'B')
        })

        it('should set the notes of a A#min7b5 chord', () => {
            let instance = chord('A#').min7b5()
            assert.equal(instance.root, 'A#')
            assert.equal(instance.third, 'C#')
            assert.equal(instance.fifth, 'E')
            assert.equal(instance.seventh, 'G#')
        })
    })

    describe('minMaj7', () => {
        it('should set the notes of a CminMaj7 chord', () => {
            let instance = chord('C').minMaj7()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'Eb')
            assert.equal(instance.fifth, 'G')
            assert.equal(instance.seventh, 'B')
        })
        it('should set the notes of a C#minMaj7 chord', () => {
            let instance = chord('C#').minMaj7()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G#')
            assert.equal(instance.seventh, 'B#')
        })
        it('should set the notes of a DbminMaj7 chord', () => {
            let instance = chord('Db').minMaj7()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'Fb')
            assert.equal(instance.fifth, 'Ab')
            assert.equal(instance.seventh, 'C')
        })
    })

    describe('maj7#5', () => {
        it('should set the notes of a Cmaj7#5 chord', () => {
            let instance = chord('C')['maj7#5']()
            assert.equal(instance.root, 'C')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G#')
            assert.equal(instance.seventh, 'B')
        })
        it('should set the notes of a Dbmaj7#5 chord', () => {
            let instance = chord('Db')['maj7#5']()
            assert.equal(instance.root, 'Db')
            assert.equal(instance.third, 'F')
            assert.equal(instance.fifth, 'A')
            assert.equal(instance.seventh, 'C')
        })
        it('should set the notes of a Dmaj7#5 chord', () => {
            let instance = chord('D')['maj7#5']()
            assert.equal(instance.root, 'D')
            assert.equal(instance.third, 'F#')
            assert.equal(instance.fifth, 'A#')
            assert.equal(instance.seventh, 'C#')
        })
    })

    describe('dim7', () => {
        it('should set the notes of a C#dim7 chord', () => {
            let instance = chord('C#').dim7()
            assert.equal(instance.root, 'C#')
            assert.equal(instance.third, 'E')
            assert.equal(instance.fifth, 'G')
            assert.equal(instance.seventh, 'Bb')
        })
        it('should set the notes of a E#dim7 chord', () => {
            let instance = chord('E#').dim7()
            assert.equal(instance.root, 'E#')
            assert.equal(instance.third, 'G#')
            assert.equal(instance.fifth, 'B')
            assert.equal(instance.seventh, 'D')
        })
    })

    describe('notes', () => {
        it('should return a list of all notes in a triad', () => {
            let notes = chord('C').major().notes()
            assert.deepEqual(notes, ['C', 'E', 'G'])
        })

        it('should return a list of all notes in a seventh chord', () => {
            let notes = chord('C').maj7().notes()
            assert.deepEqual(notes, ['C', 'E', 'G', 'B'])
        })
    })
})