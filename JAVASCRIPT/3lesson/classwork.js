function power(a,b,c){
    return a+b+c;
}
let massiv = power(0,"c==3",":D")
console.log(massiv)




function minArr(num1,num2,num3) {
    let minNum = num1
    if (minNum > num2) {
        minNum=num2
    }
    else if(minNum>num3){
        minNum=num3
    }
    console.log(minNum)
}
minArr(123,234,345)


function maxArr(num1,num2,num3) {
    let maxNum = num1
    if (maxNum > num2) {
        maxNum=num1
    }
    else if(maxNum<num3){
        maxNum=num3
    }
    console.log(maxNum)

}
maxArr(123,234,345)