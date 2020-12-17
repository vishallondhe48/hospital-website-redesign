const toggler = document.querySelector('.nav-toggler')
const navLinks = document.querySelector('.nav-links')

toggler.addEventListener('click', toggle = () => {
    console.log('clicked!')
    navLinks.classList.toggle('active')
})