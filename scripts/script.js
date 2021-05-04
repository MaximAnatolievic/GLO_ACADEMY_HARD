'use strict'

class DomElement{
    constructor(selector, height, width, bg, fontSize, name){
        this.elem = document.createElement('div');    
        const inp = document.createElement('input');
        this.elem.appendChild(inp);
        inp.style.position = 'relative';
        inp.placeholder = 'Введи текст';
        this.selector = selector;
        this.elem.style.height = height + 'px';
        this.elem.style.width = width + 'px';
        this.elem.style.backgroundColor = bg;
        this.elem.style.fontSize = fontSize;
        if(this.selector == '.'){
            this.elem.className = name;
        }
        if(this.selector == '#'){
            this.elem.id = name;
        }
        this.elem.style.position='absolute';
        this.elem.left = 0;
        this.elem.top = 0;
        inp.style.width = width*0.8 + 'px';
        inp.style.left = 0.045*width +'px';
        inp.style.top = height*0.3 + 'px';
        inp.style.backgroundColor = bg;
    }
    add (){
        document.body.append(this.elem);
    };

};

let aaa = new DomElement('#', 100, 100, 'red', 50, 'sqr');

document.addEventListener("DOMContentLoaded", aaa.add());

document.addEventListener('keydown', function shake(event){
    
    const cls =document.querySelector('div');

           
    switch(event.code){
        case 'ArrowRight':
            cls.left += 10;
            cls.style.left = cls.left + 'px';
            break;
        case 'ArrowLeft':
            cls.left -= 10;
            cls.style.left = cls.left + 'px';
            break;

        case 'ArrowDown':
            cls.top += 10;
            cls.style.top = cls.top + 'px';
            break;
        case 'ArrowUp':
            cls.top -= 10;
            cls.style.top = cls.top + 'px';
            break;        
        default:
            console.log('Нажаты не стрелки');
    }

});

