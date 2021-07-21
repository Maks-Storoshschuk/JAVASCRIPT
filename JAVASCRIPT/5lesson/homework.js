// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// -- Напишіть код,  який за допомоги document.getElementById або document.get
// ElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let conts = document.body.getElementsByTagName('p');
let cont = conts[0]
console.log(cont.innerText);


// -- отримує текст з блоку з id "rules"
let rulles = document.getElementById("rules");
console.log(rulles.innerText);


// -- замініть текст параграфа з id 'content' на будь-який інший
cont.innerText = "Мовлення як вид людської діяльності завжди зорієнтоване на виконання певного комунікативного завдання. " +
    "Висловлюючи думки і почуття, людина ставить конкретну мету — щось повідомити, про щось переконати тощо. Існує " +
    "багато визначень тексту. Наведемо окремі з них."
console.log(cont.innerText);


// -- замініть текст параграфа з id 'rules' на будь-який інший
rulles.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti\n" +
    "    molestias mollitia pariatur porro saepe! Dolorem eaque earum eligendi, iste maxime molestias quam vitae.\n" +
    "    Dolore hic in quae sed."
console.log(rulles.innerText);


// -- змініть кожному елементу колір фону на червоний
let backGround = document.body.children;
    for (let backcolor of backGround){
        backcolor.style.backgroundColor = "red"
        // -- змініть кожному елементу колір тексту на синій
        backcolor.style.color = "blue"
    }


// -- отримати весь список класів елемента з id=rules і вивести їх в
// console.log
const select = document.getElementById("rules").classList;
console.log(select);


// -- отримати всі елементи з класом fc_rules. визначити їм 2 події
const all = document.body.getElementsByClassName('fc_rules');
console.log(all)
// "клік", одна вивдоить текст елементу, інша довільний ьексь
for (let i = 0; i < all.length; i++) {
    const allElement = all[i];
    allElement.addEventListener("click", function (){
        console.log(allElement.textContent)
    });
    allElement.addEventListener("click", function (){
        (console.log('Довільний текст'))
    });
    allElement.addEventListener("click", function (){
        allElement.style.color = 'black'
    });
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний