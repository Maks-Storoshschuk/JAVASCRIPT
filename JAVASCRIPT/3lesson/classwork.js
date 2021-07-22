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

function ran(){
    let ran=[]
    for (let i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random()*100))
    }
    return ran
}
let rand = ran()
console.log(rand)


let mass = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keyReturn() {
	let mas = [];
	for (const argument of arguments) {
		for (const argumentElement of argument) {
			for (const argumentElementElement in argumentElement) {
				mas.push(argumentElementElement);
			}
		}
	}
	return mas;
}
console.log(keyReturn(mass));

function znach() {
    let mas = [];
    for (const argument of arguments) {
        for (const argumentElement of argument) {
            for (const argumentElementElement in argumentElement) {
                mas.push(argumentElement[argumentElementElement]);
            }
        }
    }
    return mas;
}
console.log(znach(mass));


let matrix1=[12,23,34,45]
let matrix2=[23,34,45,56]

function matrix(matrixIndex1 = [], matrixIndex2 =[]){
    matriXXX=[]
    for (let i = 0; i < matrixIndex1.length; i++) {
        matriXXX.push(matrixIndex1[i]+matrixIndex2[i])
    }
    return matriXXX;
}
console.log(matrix(matrix1,matrix2));

let abetka=['a','b','c'];
let chisla=[1,2,3];

function zad(zad1=[],zad2=[]){
    zadacha=[]
    for (let i = 0; i < zad1.length; i++) {
        zadacha.push(zad1[i],zad2[i])
    }
    return zadacha;
}
console.log(zad(abetka,chisla))

rev=chisla.reverse()
console.log(rev)


chisla.reverse()


let chisla3= chisla.concat(4,5,6)
console.log(chisla3)

let myArray = new Array (1,2,3);
myArray.unshift(4,5,6);
console.log(myArray)

chisla=[1,2,3,4,5]
 chisla= chisla.splice(3,2)
console.log(chisla)

chisla=[1,2,3,4,5]
chisla= chisla.slice(0,2)
console.log(chisla)

let myArray = new Array ("1", "2", "3", "4", "5");
myArray.splice(3, 2, "a", "b", "c");
console.log(myArray)

function ran(){
    let ran=[]
    for (let i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random()*100))
    }
    return ran}
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
function double(arr) {
   let moass = [];
    for (let i = 0; i < arr.length; i++) {
       if (!(arr[i]%2)){
           moass.push(arr[i])
       }
    }
    return moass
}
let double1 = double(ran());
console.log(double1)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
function word(arr) {
    let words = '';
    for (const some of arr) {
        words+=some
    }
    return words

}
function word2(arr) {
    let i = 0
    let word = ''
    while (arr[i]) {word+=arr[i]
    i++}
return word
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
function copyFun(arr) {
    let clearArrr = []
    for (const arrElement of arr) {
        clearArrr.push(arrElement)
    }
    return clearArrr;
}

let someArray = ['s', 'd','a','f']

console.log(word2(someArray));
console.log(copyFun(someArray));