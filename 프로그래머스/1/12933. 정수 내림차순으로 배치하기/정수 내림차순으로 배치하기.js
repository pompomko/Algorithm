function solution(n) {
    
//    n=String(n)
//     n=n.split('')
//     n=n.sort((a,b)=>b-a).join('')
//     n=Number(n)
    
//     return n;
    
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''))
}