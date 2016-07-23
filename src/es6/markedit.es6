import marked from 'marked';
import { Dom } from './dom.es6';
import { Editor } from './editor.es6';
import { Handler } from './handler.es6';
import { Utility } from './utility.es6';

class Markedit {

    constructor(options){
        var defaultOptions = {me:true, you:false}
        this.options = Object.assign({}, defaultOptions, options);

        if(!this.options.container){
            return Error('No container defined for Markedit');
        }

        this.document = document;
        this.marked = marked;
        this.handler = new Handler(this.document);

        this.controls = [
            {icon:'bold', className:'bold'},
            {icon:'italic', className:'italic'},
            {icon:'header', className:'header'},
            {icon:'link', className:'link'},
            {icon:'code', className:'code'},
            {icon:'image', className:'image'},
            {icon:'list', className:'listUl'},
            {icon:'list-ol', className:'listOl'},
            {text:'---', icon:'line', className:'line'},
            {icon:'quote-left', className:'quote'},
            {icon:'eye', className:'preview'},
            {icon:'fullscreen', className:'fullscreen'},
            {icon:'question', className:'help'}
        ];
        this.buildDOM();
        this.attachEvents();

    }

    buildDOM(){
        let container = this.document.getElementById(this.options.container);
        this.dom = new Dom(this.controls, this.options);
        container.appendChild(this.dom.makeWrapper());
    }

    attachEvents(){
        // console.log(this.editorEl);
        this.controls.forEach(val => {
            this.handler.handle(val.className+'Event', (e) => {
                let editor = new Editor(this.document, this.options);
                if(val.className === 'preview' || val.className === 'help' || val.className === 'fullscreen'){
                    editor[val.className](e);
                }
                else {
                    editor['insert' + Utility.capitalizeFirstLetter(val.className)](e);
                }
            })
        })

        this.handler.handle('onResize', (e) => {
            console.log('resize', e.detail.width)
            let controlsEl = this.document.querySelector('.markedit__controls');
            controlsEl.style.width = e.detail.width;
        })
    }
}

window.Markedit = Markedit;

export default Markedit;