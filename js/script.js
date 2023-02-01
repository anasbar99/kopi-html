const navbarRight = document.querySelector('.navbar__right');
// const menuToggle = document.querySelector('#hamburger__menu');

// menuToggle.addEventListener('click', function(){
//     navbarRight.classList.toggle('active')
// })
document.querySelector('#hamburger__menu').onclick = () => {
    navbarRight.classList.toggle('active')
}

const hamburger = document.querySelector('#hamburger__menu')
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarRight.contains(e.target)) {
        navbarRight.classList.remove('active')
    }
})

const prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").classList.remove('show');
    }
    else { document.getElementById("header").classList.add('show');
    }
    prevScrollpos = currentScrollPos;
  }