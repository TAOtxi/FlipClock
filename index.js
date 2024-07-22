function updateNumber(el, time) {
    el.children[0].className = "front number-" + time;

    if (time === 59)
        el.children[1].className = "back number-" + 0;
    else
        el.children[1].className = "back number-" + (time + 1);
}

function reductionCard() {
    second.classList.remove('flipping');
    minute.classList.remove('flipping');
    hour.classList.remove('flipping');
}

function updateTime() {
    let date = new Date();

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
}

function flip() {
    second.classList.add('flipping');
    if (s === 0) {
        minute.classList.add('flipping');

        if (m === 0) {
            hour.classList.add('flipping');
        }
    }
}

function init() {
    updateTime();
    updateNumber(second, s);
    updateNumber(minute, m);
    updateNumber(hour, h);
}

function run() {
    updateTime();
    flip();

    setTimeout(() => {
        reductionCard();
        updateNumber(second, s);
        updateNumber(minute, m);
        updateNumber(hour, h);
    }, 500);
}

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

var h, m, s;

init();
setInterval(run, 1000);
