'use strict';

let interval = require('../src/interval');
let assert = require('chai').assert;

describe('interval', () => {
    describe('minorThird', () => {
        it('should return the note a minor third above C', () => {
            let result = interval('C').minorThird();
            assert.equal(result, 'Eb');
        });

        it('should return the note a minor third above C#', () => {
            let result = interval('C#').minorThird();
            assert.equal(result, 'E');
        });

        it('should return the note a minor third above Db', () => {
            let result = interval('Db').minorThird();
            assert.equal(result, 'Fb');
        });
    });

    describe('majorThird', () => {
        it('should return the note a major third above C', () => {
            let result = interval('C').majorThird();
            assert.equal(result, 'E');
        });

        it('should return the note a major third above C#', () => {
            let result = interval('C#').majorThird();
            assert.equal(result, 'E#');
        });

        it('should return the note a major third above Db', () => {
            let result = interval('Db').majorThird();
            assert.equal(result, 'F');
        });
    });
});