import expect from 'expect.js';
import { Utility } from '../../src/es6/utility.es6';

describe('Utilty tests', () => {

    let utility;


    beforeEach(() => utility = new Utility());

    describe('capitalize', () => {
        it('capitalize a word', () => {
            let word = 'word';
            let cap = Utility.capitalizeFirstLetter(word);
            expect(cap).to.equal('Word');
            expect(cap).to.not.equal('word');
        });
    });

    describe('toggleClass', () => {

        let div = document.createElement('div');

        it('add class if arguments', () => {
            div.className = 'container';
            Utility.toggleClass(div, 'open');
            expect(div.className).to.equal('container open');
        });

        it('remove class if arguments', () => {
            div.className = 'container open';
            Utility.toggleClass(div, 'open');
            expect(div.className).to.equal('container ');
        });
    });
});
