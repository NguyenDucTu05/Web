const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function moveSlider() {
    const itemWidth = items[0].offsetWidth + 30; 
    track.style.transform = `translateX(${-index * itemWidth}px)`;
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) index++;
    moveSlider();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) index--;
    moveSlider();
});