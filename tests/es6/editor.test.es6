import expect from 'expect.js';
import jsdom from 'mocha-jsdom';
import { Editor } from '../../src/es6/editor.es6';
import {Handler} from '../../src/es6/handler.es6';
// import sinon from 'sinon';

describe('Dom tests', () => {


    let editor, controls, options;

    beforeEach(() => {
        jsdom();
        controls = [
            {icon: 'bold', className: 'bold'},
            {icon: 'italic', className: 'italic'},
            {icon: 'header', className: 'header'},
            {icon: 'link', className: 'link'},
            {icon: 'code', className: 'code'},
            {icon: 'image', className: 'image'},
            {icon: 'list', className: 'listUl'},
            {icon: 'list-ol', className: 'listOl'},
            {text: '---', icon: 'line', className: 'line'},
            {icon: 'quote-left', className: 'quote'},
            {icon: 'eye', className: 'preview'},
            {icon: 'fullscreen', className: 'fullscreen'},
            {icon: 'question', className: 'help'}

        ];

        options = {
            container: 'md',
            width: '400px',
            height: '400px',
            resize: 'both',
            onFullScreen: function (e) {
                console.log(e.target)
            }
        };

        editor = new Editor(controls, options)
    });
});