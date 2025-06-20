document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const sureBtn = document.getElementById('sureBtn');
    const question = document.getElementById('question');
    const buttonsContainer = document.querySelector('.buttons'); // Получаем контейнер кнопок
    const rainbowContainer = document.getElementById('rainbowContainer');
    const dancingRainbowsContainer = document.getElementById('dancingRainbows');
    const secretMessage = document.getElementById('secretMessage');

    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];

    // Создаем полоски радуги для фоновой анимации
    colors.forEach((color, index) => {
        const band = document.createElement('div');
        band.className = 'rainbow-band';
        rainbowContainer.appendChild(band);
    });

    // Функция для запуска всех анимаций и показа сообщения
    function startCelebration() {
        // Скрываем вопрос и кнопки
        question.classList.add('hide-element');
        buttonsContainer.classList.add('hide-element');

        // Активируем фоновую радугу
        rainbowContainer.classList.add('rainbow-active');

        // Запускаем танцующие радуги
        for (let i = 0; i < 20; i++) { // Создаем 20 танцующих радуг
            setTimeout(() => {
                createDancingRainbow();
            }, i * 300); // Запускаем их поочередно с небольшой задержкой
        }

        // Показываем секретное сообщение после небольшой задержки, чтобы фон успел появиться
        setTimeout(() => {
            secretMessage.classList.add('show');
        }, 800); // Задержка в 0.8 секунды
    }

    // Функция для создания одной танцующей радуги (без изменений)
    function createDancingRainbow() {
        const dancingRainbow = document.createElement('div');
        dancingRainbow.className = 'dancing-rainbow';

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        const dx = (Math.random() - 0.5) * 400;
        const dy = (Math.random() - 0.5) * 400;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        const randRot = Math.random() * 360 - 180;

        dancingRainbow.style.left = `${startX}px`;
        dancingRainbow.style.top = `${startY}px`;
        dancingRainbow.style.setProperty('--dx', `${dx}px`);
        dancingRainbow.style.setProperty('--dy', `${dy}px`);
        dancingRainbow.style.setProperty('--rand-rot', randRot);
        dancingRainbow.style.animation = `dance ${duration}s ease-in-out ${delay}s forwards`;

        dancingRainbowsContainer.appendChild(dancingRainbow);

        dancingRainbow.addEventListener('animationend', () => {
            dancingRainbow.remove();
        });
    }

    // Обработчики событий для кнопок
    yesBtn.addEventListener('click', startCelebration);
    sureBtn.addEventListener('click', startCelebration);
});