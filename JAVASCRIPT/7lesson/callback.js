function aweting(cb){
    setTimeout(()=>{
        cb('1) Прокинутись');
    },1000)
}
function diner(cb){
    setTimeout(()=>{
        cb('2) Поснідати');
    },500)
}
function wash(cb){
    setTimeout(()=>{
        cb('3) Піти в душ');
    },2000)
}
function repeat(cb){
    setTimeout(()=>{
        cb('4) Повторити лекцію');
    },300)
}
function bag(cb){
    setTimeout(()=>{
        cb('5) Скласти рюкзак');
    },100)
}
function goOut(cb){
    setTimeout(()=>{
        cb('6) Йти на трамвай');
    },4000)
}
function listen(cb){
    setTimeout(()=>{
        cb('7) Слухати лекцію');
    },2000)
}
function practic(cb){
    setTimeout(()=>{
        cb('8) Практикувати');
    },400)
}
function goToHome(cb){
    setTimeout(()=>{
        cb('9) Їхати додому');
    },800)
}
function fuckWife(cb){
    setTimeout(()=>{
        cb('10) Трахати красуню дружину =D')
    },2000)
}

let baton = document.getElementById('start')
baton.onclick = function (){
    aweting((data)=>{
        console.log(data)
        diner((data)=>{
            console.log(data)
            wash((data)=>{
                console.log(data)
                repeat((data)=>{
                    console.log(data)
                    bag((data)=>{
                        console.log(data)
                        goOut((data)=>{
                            console.log(data)
                            listen((data)=>{
                                console.log(data)
                                practic((data)=>{
                                    console.log(data)
                                    goToHome((data)=>{
                                        console.log(data)
                                        fuckWife((data)=>{
                                            console.log(data)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })

            })
        })
    })
}


