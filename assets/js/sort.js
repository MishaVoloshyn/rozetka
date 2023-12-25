const filterBOX = document.querySelectorAll('.box')

document.querySelector('nav').addEventListener('click', event =>{

    if( event.target.tagName !== 'LI')
    {
        return false;
    }

    let filterClass = event.target.dataset['f'];

    filterBOX.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)){
            elem.classList.add('hide');
        }
    })
})