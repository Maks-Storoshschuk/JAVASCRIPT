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

const shedule = async()=>{
    const aw = await aweting();
    console.log(aw);
    const din = await diner();
    console.log(din);
    const was = await wash();
    console.log(was);
    const rep = await repeat();
    console.log(rep);
    const bg = await bag();
    console.log(bg);
    const go = await goOut();
    console.log(go);
    const ls = await listen();
    console.log(ls);
    const pr = await practic();
    console.log(pr);
    const Home = await goToHome();
    console.log(Home);
    const fuck = await fuckWife();
    console.log(fuck);
}
let baton = document.getElementById('start')
baton.onclick = function (){
    shedule()
}