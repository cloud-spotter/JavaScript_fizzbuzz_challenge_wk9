const fizzBuzz = require('./fizzbuzz.js')

describe ('fizzBuzz', () => {
    it('returns Fizz when 3 is passed to it', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    /* Should I phrase these statements as generalisations instead?
    e.g. it('returns Buzz when a multiple of 5 is passed to it')*/
    it('returns Buzz when 5 is passed to it', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('returns the number 8 when 8 is passed to it', () => {
        expect(fizzBuzz(8)).toBe(8);
    });

    it('returns FizzBuzz when 15 is passed to it', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('returns Fizz when 18 is passed to it', () => {
        expect(fizzBuzz(18)).toBe('Fizz');
    });

    it('returns Buzz when 20 is passed to it', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    it('throws an error if passed a null argument', () => {
        expect(() => {
            fizzBuzz(null);
        }).toThrow('Input must not be null');
    });
});