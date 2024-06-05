let minValue = parseInt(document.getElementById('minValue').value);//= document.getElementById('minValue').value //= parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(document.getElementById('maxValue').value);//= document.getElementById('maxValue').value //= parseInt(prompt('Максимальное знание числа для игры','100'));

let answerNumber  //= Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun //= true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

//orderNumberField.innerText = orderNumber;
//answerField.innerText = `Вы загадали число ${answerNumber }?`;
//resetGame();

//document.getElementById('btnRetry').addEventListener('click', () => {
//resetGame()
//});

document.getElementById('btnSubmit').addEventListener('click', function () {
    event.preventDefault();
    

    minValue = parseInt(document.getElementById('minValue').value);
    maxValue = parseInt(document.getElementById('maxValue').value);
    console.log('minValue550', minValue);
    console.log('maxValue550', maxValue);
    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    let answerPhrase = answerNumber

    document.getElementById('orderNumberField').innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;

    document.getElementById('answerField').innerText = answerPhrase
})

//document.getElementById('btnSubmit').addEventListener('click', gameRun())

//function resetGame() {
     //minValue = Math.floor(Math.random() * Math.floor(maxValue - minValue) + minValue)
     //maxValue = Math.floor(Math.random() * Math.floor(maxValue - minValue) + minValue)
    //minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    //maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    //if(isNaN(minValue)){
        //minValue = 0
    //};
    //if(isNaN(maxValue)){
        //maxValue = 100
    //}

    //alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    //console.log('minValue', minValue)
    //console.log('maxValue', maxValue)

    //orderNumber = 1;
    //answerNumber = Math.floor((minValue + maxValue) / 2);
    //gameRun = true;
    //let answerPhrase = answerNumber
    

    //document.getElementById('orderNumberField').innerText = orderNumber;
    //answerField.innerText = `Вы загадали число ${answerNumber }?`;

    //document.getElementById('answerField').innerText = answerPhrase
//}

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            console.log('minValue === maxValue', minValue === maxValue)
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
        if(answerField.innerText = answerNumber){
            //console.log('4444');
            const answerWin = ["Это было легко!", "Слишком просто для компьютера", "Я знаю всё!"];
            const randomNum = Math.round(Math.random() * 2);
            answerField.innerText = answerWin[randomNum];
                        
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
            let result = numberInText(answerNumber);
            console.log('result' , result);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            console.log('minValue', minValue)
            console.log('maxValue', maxValue)
        }
    }
})

function numberInText(answerNumber) {4
    //console.log('numberInText' , typeof(answerNumber))
    // Проверяем, является ли переданный аргумент числом
    //if(typeof answerNumber === 'number' && Number.isInteger(answerNumber) >= -999 && answerNumber <= 999) {
        // Создаем массивы с числами 0-19, с десятками и сотнями
        console.log(answerNumber , 'answerNumber');
        //if (answerNumber) {
            console.log(answerNumber , 'answerNumberAfterIf');
            const simpleNums = ['ноль', 'один', 'два','три','четыре','пять', 'шесть','семь','восемь','девять','десять','одиннадцать','двенадцать','тринадцать', 'четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];

            if (answerNumber === 0) {
                return ' ноль'
            } // обработка нуля

            let result = ''

            if (answerNumber < 0) {
                result += 'минус '
                answerNumber = Math.abs(answerNumber) 
            } // обработка отрицательных чисел (мы добавим слово минус, а само число станет положительным по модулю)

            //if (answerNumber > 0) {
                if (answerNumber < 20) {
                    result += simpleNums[answerNumber] + ' ';
                } else {
                    result += simpleNums[Math.floor(answerNumber % 10)] + ' ';
                }
            //} // обработка 1-19

            return result.trim(); // убираем лишние пробелы в конце строки
        //} else {
            //return answerNumber
        //}
    //}
} 