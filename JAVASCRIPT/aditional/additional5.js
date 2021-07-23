// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
const {username} = document.forms.a;
const btn = document.getElementById('btn');
const mainDiv = document.getElementById('content');
const content = JSON.parse(localStorage.getItem('name'))||[];

const writeContent = ()=>{
    for (let item of content) {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = item
        mainDiv.appendChild(itemDiv)
    }
}
btn.onclick = ()=>{
    content.push(username.value)
    localStorage.setItem('name', JSON.stringify(content))
    mainDiv.innerHTML =''
    writeContent()
}
writeContent()

// console.log(form);
// form.onsubmit = function (restart){
//     console.log(restart.target.username.value);
//     const res = localStorage.getItem('name') || [];
//     console.log(res);
//     res.push(restart.target.username.value)
//     localStorage.setItem('name',JSON.stringify(res));
//     let divka = document.getElementsByTagName('div');
//     let text = divka.innerText
//     text.innerText = JSON.parse(localStorage.getItem(res))
// }
// На index2.html виводити записане в localstorage ім'я в div
//
let products = [{
        name: 'Набір чорного чаю Akbar Fruit Fiesta, 2 г, 80 шт.',
        number:1,
        price:'199,00 грн',
        img: "https://img.auchan.ua/rx/q_90,ofmt_webp/https://auchan.ua/media/catalog/product/5/0/5014176001537_91.jpg"
    },
    {
        name: 'Чай зелений Shere Once Upon A Time',
        number: 1,
        price: '99,00 грн',
        img: 'https://img.auchan.ua/rx/q_90,ofmt_webp/https://auchan.ua/media/catalog/product/4/7/4791014011545_67.jpg'
    },
    {
        name: 'Чай чорний байховий дрібний з ароматом бергамоту Earl Grey Fantasy Greenfield к/у 50х2г',
        number: 1,
        price: '69,50 грн',
        img: 'https://img.auchan.ua/rx/q_90,ofmt_webp/https://auchan.ua/media/catalog/product/4/8/4820209840124_252.jpg'

    },
    {
        name: 'ще якийсь чай',
        number: 1,
        price: '54,50 грн',
        img: 'https://img.auchan.ua/rx/q_90,ofmt_webp/https://auchan.ua/media/catalog/product/c/a/ca4b4b2548efabaf2cec13' +
            'f1aa99c00ff9a99e0ac75eb151ddcac5e4a64694a3.jpeg'
    }
]

let productsDiv = document.getElementsByClassName('shop')[0];

let basket = JSON.parse(localStorage.getItem('basket'))|| [];
for (let product of products) {

    let productDiv =document.createElement('div');

    let title = document.createElement('h1');
    title.innerText = product.name;
    productDiv.appendChild(title);

    let image = document.createElement('img');
    image.src = product.img;
    image.style.width = '400px';
    productDiv.appendChild(image);

    let price = document.createElement('h4');
    price.innerText = product.price;
    productDiv.appendChild(price)

    let baton = document.createElement('button');
    baton.innerText = 'buy';
    baton.onclick = function (){
        basket.push(product)
        localStorage.setItem('basket',JSON.stringify(basket))
    }
    productDiv.appendChild(baton);
    productsDiv.appendChild(productDiv)
}


// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
//
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];



// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];