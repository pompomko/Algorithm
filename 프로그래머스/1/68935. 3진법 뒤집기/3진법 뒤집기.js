function solution(n) {
    
    // parseInt(n,3).toString(2)
    return parseInt(n.toString(3).split('').reverse().join(''),3) 

}