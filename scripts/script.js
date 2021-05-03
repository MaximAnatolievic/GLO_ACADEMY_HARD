'use strict'

const DomElement = function(selector, height, width, bg, fontSize, name){
    const elem = document.createElement('div');
    elem.selector = selector;
    elem.style.height = height;
    elem.style.width = width;
    elem.style.backgroundColor = bg;
    elem.style.fontSize = fontSize;
    if(elem.selector == '.'){
        elem.className = name;
    }
    if(elem.selector == '#'){
        elem.id = name;
    }
    elem.style.position='relative';
    elem.left = 0;
    elem.top = 0;
    document.body.append(elem);
    return elem;
};

const aaa = new DomElement('#', '100px', '100px', 'red', 50, 'sqr');

window.addEventListener('keydown', function shake(event){

    switch(event.code){
        case 'ArrowRight':
            aaa.left += 10;
            aaa.style.left = aaa.left + 'px';
            break;
        case 'ArrowLeft':
            aaa.left -= 10;
            aaa.style.left = aaa.left + 'px';
            break;

        case 'ArrowDown':
            aaa.top += 10;
            aaa.style.top = aaa.top + 'px';
            break;
        case 'ArrowUp':
            aaa.top -= 10;
            aaa.style.top = aaa.top + 'px';
            break;        
        default:
            console.log('Нажаты не стрелки');
    }

})