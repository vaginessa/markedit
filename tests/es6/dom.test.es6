import expect from 'expect.js';
import {Dom} from '../../src/es6/dom.es6';
import {Handler} from '../../src/es6/handler.es6';
// import sinon from 'sinon';

describe('Dom tests', () => {


    let dom, controls, options;

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

        dom = new Dom(controls, options)
    });

    describe('constructor', () => {
        it('construct', () => {
            expect(dom).to.not.eql(undefined);
        });

        it('set instance properties', () => {
            expect(dom.document).to.eql(document);
            expect(dom.options).to.eql(options);
            expect(dom.controls).to.eql(controls);
            expect(dom.handler).to.be.a(Handler);
        });
    });

    describe('makeWrapper', () => {

        it('set class name', () => {
            let wrapper = dom.makeWrapper();
            expect(wrapper.className).to.eql('markedit');
        });
        it('set height n width', () => {
            let wrapper = dom.makeWrapper();
            expect(wrapper.style.width).to.eql(options.width);
            expect(wrapper.style.height).to.eql(options.height);
        });
        it('build children', () => {
            let wrapper = dom.makeWrapper();
            expect(wrapper.querySelector('.markedit__text')).to.ok();
            expect(wrapper.querySelector('.markedit__preview')).to.ok();
            expect(wrapper.querySelector('.markedit__controls')).to.ok();
        });
    });

    describe('makeIcon', () => {
        it('set class name', () => {
            let icon = dom.makeIcon('bold');
            expect(icon.className).to.eql('icon-bold');
        });
        it('make text', () => {
            let icon = dom.makeIcon('bold', '---');
            expect(icon.textContent).to.eql('---');
        });
    });

    describe('makeControl', () => {
        it('set class name', () => {
            let control = dom.makeControl('bold', 'markedit__control bold');
            expect(control.className.indexOf('markedit__control')).to.not.eql(-1);
        });
        it('build children', () => {
            let control = dom.makeControl('bold', 'markedit__control bold');
            expect(control.querySelector('.icon-bold')).to.ok();
        });
        it('click event');
    });

    describe('makeControls', () => {

        it('set class name', () => {
            let controlsEl = dom.makeControls('bold', 'markedit__control bold');
            expect(controlsEl.className.indexOf('markedit__controls')).to.not.eql(-1);
        });
        it('build children', () => {
            let controlsEl = dom.makeControls();
            expect(controlsEl.querySelector('.markedit__divider')).to.ok();
            expect(controlsEl.querySelector('.markedit__control')).to.ok();
        });
    });

    describe('makeText', () => {

        it('set class name', () => {
            let text = dom.makeText();
            expect(text.className.indexOf('markedit__text')).to.not.eql(-1);
        });
        it('mousemove, focus, and blur events');
    });

    describe('makePreview', () => {

        it('set class name', () => {
            let preview = dom.makePreview();
            expect(preview.className.indexOf('markedit__preview')).to.not.eql(-1);
        });
    });
});
