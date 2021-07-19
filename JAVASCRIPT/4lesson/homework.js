// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function ran(){
    let ran=[]
    for (let i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random()*100))
    }
    return ran
}
let rand = ran()
console.log(rand)

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

function ran2(n){
    let ran2=[]
    for (let i = 0; i < 10; i++) {
        ran2.push(Math.round(Math.random()*n))
    }
    return ran2
}
let rand2 = ran2(1000);
console.log(rand2);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let rand3 = ran2(15);
rand3.sort();
console.log(rand3)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let rand4 = ran2(50);
let filter = rand4.filter(function (value){
    if (value % 2 === 0){
        return true
    }
});
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let rand5 = ran2(300);
let map = rand5.map(function (item){
    return item  + '' ;
})
console.log(map)

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users=[
    new User(6,'Nazar', 'Erfr','vshdjd@xuy', '09373525656'),
    new User(7,'Ura', 'Hoti','cjvzkvg@xuy', '093876556'),
    new User(8,'Mary', 'Fyerr','apocui@xuy', '025677556'),
    new User(9,'Maks', 'Qwertyr','jtpo@xuy', '09234556'),
    new User(10,'Kostya', 'Teflon','ererer@xuy', '0930090856'),
    new User(1,'Vasia', 'Sydir','jfn@xuy', '0937986556'),
    new User(2,'Igor', 'Fedorov','jfv@xuy', '093796456'),
    new User(3,'Petia', 'Petrovich','ghj@xuy', '09887556'),
    new User(4,'Kola', 'Gjiomc','qqq@xuy', '09379006'),
    new User(5,'Ivan', 'Sfhgd','www@xuy', '09379233456')
    ]
console.log(users)

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let filUs = users.filter(function (value){
    if (value.id % 2 === 0){
        return true
    }
});
console.log(filUs);

filUs.sort(function (a, b) {
    return a.id - b.id;
});
console.log(filUs);
