const BurgerMenuBtn = document.getElementById('BurgerMenuBtn');
const nav = document.querySelector('.navigation');



BurgerMenuBtn.addEventListener('click', () =>{
    nav.classList.toggle('navigationphone');

});