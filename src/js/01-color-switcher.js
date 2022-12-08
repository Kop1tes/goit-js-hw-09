const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStart.addEventListener('click', () => {
    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});