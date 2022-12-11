const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let interval = null;

btnStart.addEventListener('click', () => {
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');

    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

btnStop.addEventListener('click', () => {
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);

    clearInterval(interval);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};