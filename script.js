let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let answerPhrase = ('asfewf0', 'frfef0', 'wwerwe');

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', () => {
resetGame()
});

function resetGame() {
    // minValue = Math.floor(Math.random() * Math.floor(maxValue - minValue) + minValue)
    // minValue = Math.floor(Math.random() * Math.floor(maxValue - minValue) + minValue)
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    console.log('minValue', minValue)
    console.log('maxValue', maxValue)

    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    let answerPhrase = answerNumber

    document.getElementById('orderNumberField').innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

    document.getElementById('answerField').innerText = answerPhrase
}

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            console.log('minValue === maxValue')
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            console.log('minValue', minValue)
            console.log('maxValue', maxValue)
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        if(answerField.innerText = true){
            console.log('4444');
            let answerWin = ['wadasd', 'asdwad', 'saasd'];
            //answerWin = answerPhrase;
            answerWin = Math.round(Math.random() * 3); 
            answerField.innerText = answerWin;
                        
        }
    }
})

// answerField.innerText

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom <= 0) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            console.log('minValue', minValue)
            console.log('maxValue', maxValue)
        }
    }
})
