function solution(n) {
     let str = n.toString()
let splitStr = [...str];
    let num = splitStr.map(Number)
    
    let sum = 0;
    for (let i = 0; i < num.length; i++ ) {
  sum += num[i];
}

    return  sum
}