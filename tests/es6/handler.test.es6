import expect from 'expect.js';
import jsdom from 'mocha-jsdom';
import {Handler} from '../../src/es6/handler.es6';
import sinon from 'sinon';

describe('Handler tests', () => {
    jsdom();

    let handler;


    beforeEach(() => handler = new Handler(document));



    describe('constructor', () => {
        it('construct', () => {
            expect(handler).to.not.eql(null);
            expect(handler).to.not.eql(undefined);
        })

        it('set instances property', () => {
            expect(handler.document).to.eql(document);;
        })
    })

    describe('dispatch', () => {
        it('dispatch event', () => {
            let callback = sinon.spy();
            let e = {
                currentTarget: {
                    dispatchEvent: callback
                }
            }
            handler.dispatch(e, 'eType', {data: 3});
            expect(callback.called).to.equal(true);
        });
    })

    describe('handle', () => {
        it('handle event');
    })

});