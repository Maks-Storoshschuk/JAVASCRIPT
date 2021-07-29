function aweting(){
    return new Promise((resolve)=>
        setTimeout(()=>{
            resolve('1) Прокинутись');
        },1000)
    )
}
function diner(){
    return new Promise((resolve)=>
        setTimeout(()=>{
            resolve('2) Поснідати');
        },500)
    )
}
function wash(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('3) Піти в душ');
        }, 2000)
    )
}
function repeat(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('4) Повторити лекцію');
        }, 300)
    )

}
function bag(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('5) Скласти рюкзак');
        }, 100)
    )
}
function goOut(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('6) Йти на трамвай');
        }, 4000)
    )
}
function listen(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('7) Слухати лекцію');
        }, 2000)
    )
}
function practic(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('8) Практикувати');
        }, 400)
    )
}
function goToHome(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('9) Їхати додому');
        }, 800)
    )
}
function fuckWife(){
    return new Promise((resolve)=>
        setTimeout(() => {
            resolve('10) Трахати красуню дружину =D')
        }, 2000)
    )
}

let baton = document.getElementById('start')
baton.onclick = function (){
    aweting()
        .then(value=>{
            console.log(value)
            return diner()
        })
        .then(value=>{
            console.log(value)
            return wash()
        })
        .then(value=>{
            console.log(value)
            return repeat()
        })
        .then(value=>{
            console.log(value)
            return bag()
        })
        .then(value=>{
            console.log(value)
            return goOut()
        })
        .then(value=>{
            console.log(value)
            return listen()
        })
        .then(value=>{
            console.log(value)
            return practic()
        })
        .then(value=>{
            console.log(value)
            return goToHome()
        })
        .then(value=>{
            console.log(value)
            return fuckWife()
        })
        .then(value => {
            console.log(value)
        })
        .catch(()=>{
            console.log('EROR')
        })


}


