const BurgerMenuBtn = document.getElementById('BurgerMenuBtn');
const nav = document.querySelector('.navigation');
const header = document.querySelector('header')


BurgerMenuBtn.addEventListener('click', () =>{
    nav.classList.toggle('navigationphone');

});

window.onscroll = function () {
    if (window.scrollY > 600){
        header.style.backgroundColor ='#080a23';
    }
    else if (window.scrollY <600){
        header.style.backgroundColor ='#000000';
    }

    
}