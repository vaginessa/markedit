import expect from 'expect.js';

import './utitlity.test.es6';
import './handler.test.es6';
import './dom.test.es6';
import './editor.test.es6';


describe('Array', function() {
    it('should start empty', function() {
        var arr = [];

        expect(arr.length).to.be.a('number');
    });
});
