// ПЕРВОЕ ДЗ
// Задача 1: Вывод символов строки
let str = 'abcde';
console.log(str[0]); // 'a'
console.log(str[1]); // 'b'
console.log(str[4]); // 'e'

// Задача 2: Проверка логического выражения
let a = parseInt(prompt("Введите первое число:"));
let b = parseInt(prompt("Введите второе число:"));
console.log(a > 0 || b > 0); // true, если хотя бы одно число больше 0

// Задача 3: Проверка возраста
let age1 = parseInt(prompt("Введите ваш возраст:"));
if (age1 >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}
//ВТОРОЕ ДЗ
// Задача 1: Проверка возраста
let age = parseInt(prompt("Введите ваш возраст:"));
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

// Задача 2: Сравнение чисел
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
if (num1 > num2) {
    console.log("Первое число больше");
} else if (num2 > num1) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}

// Задача 3: Определение чётности
let number = parseInt(prompt("Введите число:"));
if (number % 2 === 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}

// Задача 4: Угадай число
const secretNumber = 7;
let guess = parseInt(prompt("Угадайте число от 1 до 10:"));
if (guess === secretNumber) {
    console.log("Вы угадали!");
} else {
    console.log("Попробуйте ещё раз!");
}

// Задача 5: Проверка логина и пароля
let login = prompt("Введите логин:");
let password = prompt("Введите пароль:");
if (login === "admin" && password === "12345") {
    console.log("Добро пожаловать!");
} else {
    console.log("Неверный логин или пароль");
}
//ТРЕТЬЕ ДЗ
console.log("Мне больше всего нравится радиоприёмник Braun SK 4. Его минималистичный дизайн, прозрачная крышка и простота управления делают его актуальным даже сегодня. В своём дизайне я могу применить этот принцип, создавая интерфейсы с чёткой композицией, функциональностью и использованием стекломорфных элементов.");
// Создаём кнопки
let glassButton = document.createElement("button");
glassButton.textContent = "Glassmorphism";
glassButton.classList.add("glassmorphic-btn");

let neoButton = document.createElement("button");
neoButton.textContent = "Neomorphism";
neoButton.classList.add("neomorphic-btn");

document.body.appendChild(glassButton);
document.body.appendChild(neoButton);

let style = document.createElement("style");
style.textContent = `
  .glassmorphic-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    padding: 15px 30px;
    border-radius: 15px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 10px;
  }

  .glassmorphic-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
  }

  .neomorphic-btn {
    background: #e0e0e0;
    border: none;
    padding: 15px 30px;
    border-radius: 15px;
    color: #333;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 10px;
    box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
  }

  .neomorphic-btn:active {
    box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff;
  }
`;
document.head.appendChild(style);

console.log("Для улучшения интерактивности можно добавить эффект наведения, анимацию нажатия и изменение цвета фона при фокусе.");
// Создаём кнопку
let clickButton = document.createElement("button");
clickButton.textContent = "Нажми меня";
clickButton.classList.add("clickbox");
document.body.appendChild(clickButton);

style.textContent += `
  .clickbox {
    background-color: lightsteelblue;
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 1vw;
  }

  .clickbox:hover {
    background-color: dodgerblue;
  }
`;
document.head.appendChild(style);

clickButton.addEventListener("click", function () {
    if (clickButton.style.backgroundColor === "lightsteelblue") {
        clickButton.style.backgroundColor = "yellow";
        clickButton.style.margin = "2vw";
        console.log("Цвет изменён на жёлтый");
    } else {
        clickButton.style.backgroundColor = "lightsteelblue";
        clickButton.style.margin = "1vw";
    }
});




//ЧЕТВЕРТОЕ ДЗ

let coordsDiv = document.createElement("div");
coordsDiv.style.position = "absolute";
coordsDiv.style.fontSize = "24px";
coordsDiv.style.fontWeight = "bold";
coordsDiv.style.background = "rgba(0, 0, 0, 0.7)";
coordsDiv.style.color = "white";
coordsDiv.style.padding = "10px 20px";
coordsDiv.style.borderRadius = "8px";
coordsDiv.style.pointerEvents = "none";
document.body.appendChild(coordsDiv);

document.addEventListener("mousemove", function(event) {
    coordsDiv.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    coordsDiv.style.left = `${event.clientX + 10}px`;
    coordsDiv.style.top = `${event.clientY + 10}px`;
});
//ПЯТОЕ ДЗ
// задача 1
let button = document.createElement("button");
button.textContent = "Нажми меня!";
button.style.fontSize = "20px";
button.style.padding = "10px";
document.body.appendChild(button);

let counter = 0;
let message = document.createElement("p");
document.body.appendChild(message);

button.addEventListener("click", function () {
    counter++;
    button.textContent = `Клики: ${counter}`;
    
    if (counter >= 15) {
        button.disabled = true; 
        message.textContent = "Вы достигли максимального количества кликов!";
    }
});
// задача 2
let timerDisplay = document.createElement("h1");
document.body.appendChild(timerDisplay);

let button = document.createElement("button");
button.textContent = "Сбросить таймер";
document.body.appendChild(button);

let time = 10;
let interval;


function startCountdown() {
    clearInterval(interval); 
    time = 10;
    timerDisplay.textContent = time;
    
    interval = setInterval(() => {
        time--;
        timerDisplay.textContent = time;
        
        if (time <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Время вышло!";
        }
    }, 1000);
}

startCountdown();

button.addEventListener("click", startCountdown);
// задача 3
let timer= document.createElement("h1");
timerDisplay.textContent = "0 сек";
document.body.appendChild(timerDisplay);

let startButton = document.createElement("button");
startButton.textContent = "Старт";
document.body.appendChild(startButton);

let stopButton = document.createElement("button");
stopButton.textContent = "Стоп";
document.body.appendChild(stopButton);

let resetButton = document.createElement("button");
resetButton.textContent = "Сброс";
document.body.appendChild(resetButton);

startButton.addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(() => {
            time++;
            timerDisplay.textContent = `${time} сек`;
        }, 1000);
    }
});

stopButton.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
});

resetButton.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    time = 0;
    timerDisplay.textContent = "0 сек";
});
