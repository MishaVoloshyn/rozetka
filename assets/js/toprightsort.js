document.querySelector('#sort-price1').onclick = Sort1;

function Sort1() {
    let nav = document.querySelector('.good-wraps');
    let replaceNode;
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}


document.querySelector('#sort-price2').onclick = Sort2;

function Sort2() {
    let nav = document.querySelector('.good-wraps');
    let replaceNode;
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replaceNode, nav.children[i]);
            }
        }
    }
}


function  insertAfter(firstElem, secondElem){
    return secondElem.parentNode.insertBefore(firstElem, secondElem.nextSibling)
}