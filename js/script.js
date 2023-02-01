const navbarRight = document.querySelector('.navbar__right');
document.querySelector('#hamburger__menu').onclick = () => {
    navbarRight.classList.toggle('active')
}

const hamburger = document.querySelector('#hamburger__menu')
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarRight.contains(e.target)) {
        navbarRight.classList.remove('active')
    }
})