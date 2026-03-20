const Slider = document.querySelector('.slider');
const prev = document.getElementById('btnPrew');
const next = document.getElementById('btnNext');

const sidecard1 = document.getElementById('sidecard-1');
const sidecard2 = document.getElementById('sidecard-2');
const sidecard3 = document.getElementById('sidecard-3');

let currentSlide = 0;

// Функция для обновления карточек
function updateCards() {
    // Убираем активные классы у всех (с учетом опечатки 'sidebar' в вашем коде)
    sidecard1.classList.remove('sidecard');
    sidecard2.classList.remove('sidecard'); // проверьте, не 'sidecard' ли там должен быть?
    sidecard3.classList.remove('sidecard');

    // Добавляем нужному слайду
    if (currentSlide === 0) {
        sidecard1.classList.add('sidecard');
    } else if (currentSlide === 1) {
        sidecard2.classList.add('sidecard'); 
    } else if (currentSlide === 2) {
        sidecard3.classList.add('sidecard');
    }
}

console.log(currentSlide)

next.addEventListener('click', () => {
    console.log(currentSlide);
    if (currentSlide < 2) {
        currentSlide++;
    } else {
        currentSlide = 0; // Сброс на начало, если дошли до конца
    }
    Slider.style.transform = `translateX(-${currentSlide * 240}px)`;
    updateCards(); // Обновляем классы
    console.log(currentSlide)
});

prev.addEventListener('click', () => {
    console.log(currentSlide)
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = 2; // Переход в конец, если нажали "назад" на 0
    }
    console.log(currentSlide)
    Slider.style.transform = `translateX(-${currentSlide * 240}px)`;
    updateCards(); // Обновляем классы
});

// Инициализация при загрузке
updateCards();
