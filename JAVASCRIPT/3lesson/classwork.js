function power(a,b,c){
    return a+b+c;
}
let massiv = power(0,"c==3",":D")
console.log(massiv)




function minArr(num1,num2,num3) {
    let minNum = num1
    if (minNum > num2) {
        minNum=num2
    }
    else if(minNum>num3){
        minNum=num3
    }
    console.log(minNum)
}
minArr(123,234,345)


function maxArr(num1,num2,num3) {
    let maxNum = num1
    if (maxNum > num2) {
        maxNum=num1
    }
    else if(maxNum<num3){
        maxNum=num3
    }
    console.log(maxNum)
}
maxArr(123,234,345)


function max (array){
    let max = array[0];
    for (const maxItem of array) {
        if (maxItem > max) max = maxItem;
    }
    return max;
}
let maxMas = max([123,234,456,567,678]);
console.log(maxMas);

function min (array){
    let min = array[0]
    for (let minItem of array){
        if (minItem < min) min = minItem;
    }
    return min;
}
let minMas = min([123,234,456,567,678]);
console.log(minMas);

function suma (arr){
    let suma = 0;
    for (let sumaElement of arr) {
   suma=suma+sumaElement;
    }
    return suma;
}
let sum = suma([123,234,345])
console.log(sum)

function aver (arr2){
    let aver = 0;
    for (let i = 0; i < arr2.length; i++) {
        const arr2Element = arr2[i];
        aver=aver+arr2Element/arr2.length
    }
    return aver;
}
let average = aver([123,234,345])
console.log(average)