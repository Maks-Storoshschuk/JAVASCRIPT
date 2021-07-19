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

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку