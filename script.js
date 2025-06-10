// Бургер-меню
document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Валидация формы
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
});

// Плавная прокрутка (можно добавить для всех ссылок)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
