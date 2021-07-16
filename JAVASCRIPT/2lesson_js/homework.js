// --створити масив з:
let arrs = [1, 2, 3, 4, 5];
console.log(arrs)
let strs = ['vasya', 'zenuk', 'boduk', 'kolia', 'ura'];
console.log(strs)
let mix = [
  {
    name: 'igor',
    id: 6,
    status: true
  },
  {
    name: 'tarik',
    id: 7,
    status: true
  },
  {
    name: 'vova',
    id: 8,
    status: false
  },
  {
    name: 'petruk',
    id: 9,
    status: true
  },
  {
    name: 'nazik',
    id: 10,
    status: true
  }
]
console.log(mix)

let pusto = []
pusto[2] = 4
console.log(pusto)

let names = ['vasya', 'zenuk', 'boduk', 'kolia', 'ura', 'vasya', 'zenuk', 'boduk', 'kolia', 'ura'];

for (let i = 1; i <= 10; i++) {
  document.write(`<div>довільний текст ${i}<div/>`)
}
let i = 0;
while (i < 20) {
  document.write(`<h1>текст</h1>`)
  i++
}

i = 0;
while (i < 20) {
  document.write(`<h1>текст${i}</h1>`)
  i++
}
let sizes = [11.3, 444, 523, 42.1, 69, 0, 5.33, 57, 53, 18.7]
for (let size of sizes) {
  console.log(`${size}`)
}

for (let name of names) {
  console.log(name)
}
let newMass = [1, "23", 'email', true, false, undefined, null, 0, [99, 11, 88, 77, 66, 55, 44, 33, 22], '!']
for (let neWmas of newMass) {
  console.log(neWmas)
}

let difEl = [99, true, 'vasya', 11, false, 'zenuk', 88, true, 'boduk', 77, false, 'kolia', 66, true, 'ura', 55, false,
  'vasya', 44, true, 'zenuk', 33, false, 'boduk', 22, true, 'kolia', 0, 'ura', false]
for (let difE of difEl){
  if (typeof difE === 'boolean') {
    document.write(`<div>${difE}</div>`)
  }
}

for (let difE of difEl){
  if (typeof difE === 'number') {
    document.write(`<div>${difE}</div>`)
  }
}

for (let difE of difEl){
  if (typeof difE === 'string') {
    document.write(`<div>${difE}</div>`)
  }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let nMasiv = [1, "23", 'email', true, false, undefined, null, 0, [99, 11, 88, 77, 66, 55, 44, 33, 22], '!']

for(let i=1; i<nMasiv.length;i++)
console.log(nMasiv[i])

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for(let i=1; i<=10;i++){
  console.log(i)
  document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=1; i<=100;i++) {
  console.log(i)
  document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=1; i<=100;i+=2) {
  console.log(i)
  document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i=2; i<=100;i+=2) {
  console.log(i)
  document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=1; i<=100;i+=2) {
  console.log(i)
  document.write(`<div>${i}</div>`)
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
  let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
  ];

let citiesWithId = [
  {user_id: 3, country: 'USA', city: 'Portland'},
  {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
  {user_id: 2, country: 'Poland', city: 'Krakow'},
  {user_id: 4, country: 'USA', city: 'Miami'}
];
const newArr =[]
let ss = 0
for (let user of usersWithId){
  for(let citi of citiesWithId){
    if( citi.user_id===user.id){
      user.address = citi
      newArr[ss]=user
      ss++
    }
  }
}
console.log(newArr);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//   Записати цей об'єкт в новий масив
// Example:
  let usersWithCities = [
  {
    id: 1, // <===
    name: 'vasya',
    age: 31,
    status: false,
    address: {
      user_id: 1, // <===
      country: 'Ukraine',
      city: 'Ternopil'
    }
  }
    ]
    // TO BE CONTINUED .....
//   ]
