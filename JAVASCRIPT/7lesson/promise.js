function aweting(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('1) Прокинутись');
        },1000)
    })
}
function diner(){
    setTimeout(()=>{
        console.log('2) Поснідати');
    },500)
}
function wash(){
    setTimeout(()=>{
        console.log('3) Піти в душ');
    },2000)
}
function repeat(){
    setTimeout(()=>{
        console.log('4) Повторити лекцію');
    },300)
}
function bag(){
    setTimeout(()=>{
        console.log('5) Скласти рюкзак');
    },100)
}
function goOut(){
    setTimeout(()=>{
        console.log('6) Йти на трамвай');
    },4000)
}
function listen(){
    setTimeout(()=>{
        console.log('7) Слухати лекцію');
    },2000)
}
function practic(){
    setTimeout(()=>{
        console.log('8) Практикувати');
    },400)
}
function goToHome(){
    setTimeout(()=>{
        console.log('9) Їхати додому');
    },800)
}
function fuckWife(){
    setTimeout(()=>{
        console.log('10) Трахати красуню дружину =D')
    })
}

let baton = document.getElementById('start')
baton.onclick = function (){
    aweting()
}


