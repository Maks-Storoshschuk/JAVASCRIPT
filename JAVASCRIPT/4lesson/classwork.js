// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [
    new Client('8', 'wlaad', 'sico', 'ofoapxnv@com', '9871116', ['pizza', 'vine']),
    new Client('9', 'petro', 'pppol', 'psdkas@com', '9879555', ['kruasan', 'beer', 'yogurt']),
    new Client('10', 'maks', 'qwerr', 'ppsclk@com', '9878776', ['flint', 'beer', 'suhi']),
    new Client('2', 'Vasilii', 'Sada', 'dhqc@com', '9899676', ['pizza', 'effs', 'vine', 'beer', 'suhi']),
    new Client('3', 'Vasilina', 'fghjk', 'daaqc@com', '12313676', ['vine']),
    new Client('1', 'Vasia', 'Sudir', 'dhqff@com', '9800676', ['pizza', 'beer', 'vine']),
    new Client('6', 'maria', 'Ookjd', 'dhsvr44@com', '9876666', ['pizza', 'beer', 'vine']),
    new Client('7', 'mia', 'Usjcbc', 'dfsfsvvb@com', '9872226', ['ketchup', 'pizza', 'beer', 'ytyior', 'vine']),
    new Client('4', 'Vasilko', 'lkjh', 'dhlkh@com', '9879008', ['pizza', 'beer', 'vine']),
    new Client('5', 'igor', 'Sjcnskj', 'dqsc@com', '98798888', ['pizza', 'bsfsr', 'ketchup', 'pizza', 'beer', 'ketchup', 'pizza', 'beer', 'vine']),
]
console.log(client)

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
client.sort(function (a, b) {
    return (a.order.length) - (b.order.length)
})
console.log(client)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції
function Car(model, brend, date, top_speed, volume) {
    this.model = model;
    this.brend = brend;
    this.date = date;
    this.top_speed = top_speed;
    this.volume = volume;
    this.drive =function () {
        console.log("їдемо зі швидкістю " + this.top_speed + " км. на годину");
    }
    this.info = function () {
        console.log(car)}
    }
    this.incraseMaxSpeed = function (newSpeed) {
        this.top_speed = this.top_speed+ newSpeed;
        console.log(this.top_speed);
    }
    this.changeYear = function (newValue){
        this.date = newValue;
        console.log(this.date);
    }
    this.driver = function (drived){
        this.driver = drived
            console.log(this.driver)
}
car = new Car('шістьорка', 'Lada', 2001, 120, 1.6);

// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
car.drive();

// -- info () - яка виводить всю інформаці про автомобілюь
car.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
incraseMaxSpeed(200)


// -- changeYear (newValue) - змінює рік випуску на значення newValue
changeYear(2020);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
driver("Василь");

// - (Те саме, тільки через клас)
class Car2 {
    constructor(model, brend, date, top_speed, volume) {
        this.model = model;
        this.brend = brend;
        this.date = date;
        this.top_speed = top_speed;
        this.volume = volume;
        this.drive = function () {
            console.log("їдемо зі швидкістю " + this.top_speed + " км. на годину");
        }
        this.info = function () {
            console.log(car2)
        }
        this.incraseMaxSpeed = function (newSpeed) {
            this.top_speed = this.top_speed+ newSpeed;
            console.log(this.top_speed);
        }
        this.changeYear = function (newValue) {
            this.date = newValue;
            console.log(this.date);
        }
        this.driver2 = function (drived) {
            this.driver = drived
            console.log(this.driver)
        }
    }
}
car2 = new Car2('seven', 'Lada', 2003, 130, 1.6);

// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
car2.drive();

// -- info () - яка виводить всю інформаці про автомобілюь
car2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car2.incraseMaxSpeed(240)

// -- changeYear (newValue) - змінює рік випуску на значення newValue
car2.changeYear(2010);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
car2.driver2("Зеник");

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
class Dirty {
    constructor(name,age,footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
            }
}
let dirty=[
    new Dirty('Oksana','14','29'),
    new Dirty('Marusia','15','30'),
    new Dirty('Natalia','16','31'),
    new Dirty('Lilia','17','32'),
    new Dirty('Ania','18','33'),
    new Dirty('Mariana','19','34'),
    new Dirty('Iruna','20','35'),
    new Dirty('Olia','21','36'),
    new Dirty('Olesia','22','37'),
    new Dirty('Julia','23','38')
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name,age,findFootSize) {
        this.name=name;
        this.age=age;
        this.findFootSize=findFootSize;
    }
}
let fatsyk = new Princ('Bodia','19','33');

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let dirty_biches of dirty){
    if ( dirty_biches.footSize === fatsyk.findFootSize){
        console.log(`Нашу попелюшку ${dirty_biches.name} сьогодні нахлабучить принц ${fatsyk.name}`)
    }
}
let princeska = dirty.find(function (itm){
    return itm.footSize === fatsyk.findFootSize
})
console.log(princeska, fatsyk)
// только с callback функцией
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку