nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY)
    if (window.scrollY > 223) {
        nav.calssList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
