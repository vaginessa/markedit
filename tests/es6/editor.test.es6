import expect from 'expect.js';
import { Handler } from '../../src/es6/handler.es6';
import { Editor } from '../../src/es6/editor.es6';

describe('Editor tests', () => {


    let editor, controls, options;

    beforeEach(() => {
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

        editor = new Editor(document, options)
    });

    describe('constructor', () => {
        it('construct', () => {
            expect(editor.document).to.equal(document);
            expect(editor.options).to.equal(options);
            expect(editor.handler).to.be.a(Handler);
        });
    });

    describe('insertBeforeText', () => {
        it('insert before text');
    });

    describe('insertAroundText', () => {
        it('insert around text', () => {
            let text = '__';
            let editorEl = document.createElement('textarea');
            editor.editor = editorEl;
            editor.editor.value = 'Hi Mark';
            editor.editor.selectionStart = 0;
            editor.editor.selectionEnd = 2;
            editor.insertAroundText(text);
            let editorElVal = editor.editor.value;
            expect(editorElVal).to.be.ok();
            // expect(editorElVal).to.be.eql('__Hi__ Mark');
        });
    }) ;

    describe('insertBeforeNode', () => {
        it('insert before node');
    });

    describe('insertAfterNode', () => {
        it('insert after node');
    });

    describe('setSelectionRange', () => {
        it('set selection range');
    });

    describe('navigateLineStart', () => {
        it('navigate to line start');
    });
});
