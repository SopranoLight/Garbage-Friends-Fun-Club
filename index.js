

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var aboutHeader = document.querySelector('.button')
var aboutUs = document.querySelector('#aboutus')

aboutHeader.addEventListener('click', () => {
    scrollTo(aboutUs);
}
)