
function repeat(){
    setTimeout(()=>{
        console.log('4) Повторити лекцію');
        bag();
    },300)
}
function bag(){
    setTimeout(()=>{
        console.log('5) Скласти рюкзак');
        goOut();
    },100)
}
function goOut(){
    setTimeout(()=>{
        console.log('6) Йти на трамвай');
        listen();
    },4000)
}
function listen(){
    setTimeout(()=>{
        console.log('7) Слухати лекцію');
        practic();
    },2000)
}
function practic(){
    setTimeout(()=>{
        console.log('8) Практикувати');
        goToHome();
    },400)
}
function goToHome(){
    setTimeout(()=>{
        console.log('9) Їхати додому');
        fuckWife();
    },800)
}
function fuckWife(){
    setTimeout(()=>{
        console.log('10) Трахати красуню дружину =D')
    },2000)
}
function aweting(){
    setTimeout(()=>{
        console.log('1) Прокинутись');
        diner();
    },1000)
}
function diner(){
    setTimeout(()=>{
        console.log('2) Поснідати');
        wash();
    },500)
}
function wash(){
    setTimeout(()=>{
        console.log('3) Піти в душ');
        repeat();
    },2000)
}
let baton = document.getElementById('start')
baton.onclick = function (){
    aweting()
}


