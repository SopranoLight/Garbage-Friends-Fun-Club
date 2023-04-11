

// function scrollTo(element){
//     window.scroll({
//         left: 0,
//         top: element.offsetTop,
//         behavior: 'smooth'
//     })
// }

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    })
}

var aboutHeader = document.querySelector('.button')
var aboutUs = document.querySelector('#aboutus')



aboutHeader.addEventListener('click', () => {
    scrollTo(aboutUs);

}
)

var garboard = document.querySelector('.garboard')
var boards = document.querySelector('#boards')

garboard.addEventListener('click', () => {
    scrollTo(boards);

}
)