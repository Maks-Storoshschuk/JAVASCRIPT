// - створити функцію яка обчислює та повертає площу прямокутника висотою
function pramokutnik(a,b){
    return(a*b)
}
console.log(pramokutnik(13,22))

// - створити функцію яка обчислює та повертає площу кола
function kolo(radius){
    return((radius**2)*3.14)
}
console.log(kolo(10))

// - створити функцію яка обчислює та повертає площу циліндру
function cilinder(radius,height){
    return(2*3.14*(radius**2+radius*height))
}
console.log(cilinder(10,20))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено); ????????????????
function arr(array){
    let maximum = array[0]
    for (let maxItem of array){
        if (maxItem > arr) arr = maxItem;
    }
    let minimum = array[0]
    for (let minItem of array){
        if (minItem < arr) arr = minItem;
    }
    // console.log(minMas);
    return minimum;
}
let maxMas = arr([123,234,456,567,678]);
console.log(maxMas);
// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function textCreator(text){
    document.write(`<div>${text}</div>`)
}
textCreator('ASUS')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulCreator(tableText){
    document.write(`
        <ul>
            <li>${tableText}</li>
            <li>${tableText}</li>
            <li>${tableText}</li>
        </ul>
    `)
}
ulCreator('SAMSUNG')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ullCreator(tableText,li){
    document.write(`<ul>`)
    let ullCreator=[0];
    for (let i = 0; i <li; i++) {
            document.write(`<li>${tableText}</li>`);
    }
    document.write(`</ul>`);
    return ullCreator;
}
ullCreator('fish',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function uliCreator(text,text1,text2){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text1}</li>
        <li>${text2}</li>
    </ul>`)
}
uliCreator('fish','hd','jcn')