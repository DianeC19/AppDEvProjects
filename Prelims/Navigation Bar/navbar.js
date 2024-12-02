const navtoggle = document.querySelector('nav-toggle')
const links = document.querySelector('.links')
navtoggle.addEventListener('click', () => {
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    elselinks.classList.add('show-links')
})