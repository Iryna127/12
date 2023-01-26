let lights = document.querySelectorAll('.light');
let redColor = document.querySelector('.light--red');
let yellowColor = document.querySelector('.light--yellow');
let greenColor = document.querySelector('.light--green');
const btn = document.getElementById('counter');
let countValue = 10;

lights = {
  1: {
    next: 2,
    interval: 5000,
    setState: () => {
      redColor.classList.add('active');
      greenColor.classList.remove('active');
    },
  },
  2: {
    next: 3,
    interval: 5000,
    setState: () => {
      redColor.classList.remove('active');
      yellowColor.classList.add('active');
    },
  },
  3: {
    next: 1,
    interval: 5000,
    setState: () => {
      yellowColor.classList.remove('active');
      greenColor.classList.add('active');
    },
  },
  4: {
    next: 1,
    interval: 10000,

    setState: () => {
      const point = setInterval(() => {
        btn.innerHTML = countValue;
        countValue -= 1;

        if (countValue < 0) {
          btn.innerHTML = '';
          clearInterval(point);
          countValue = 10;
        }
      }, 1000);
      redColor.classList.add('active');
      greenColor.classList.remove('active');
      yellowColor.classList.remove('active');
    },
  },
};

let currentState = 1;
let pressed = false;

function tickHendler() {
  if (pressed) {
    currentState = 4;
    pressed = false;
  }

  lights[currentState].setState();
  setTimeout(tickHendler, lights[currentState].interval);
  currentState = lights[currentState].next;
}

function setRed() {
  pressed = true;
}

setTimeout(tickHendler, 1000);
