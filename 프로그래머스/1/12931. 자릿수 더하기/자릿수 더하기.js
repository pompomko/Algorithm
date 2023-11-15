function solution(n)
{
    
     //자연수의 자릿값? 이거 바꾸는 함수가있나 찾아봐야겠다
let arr = n.toString().split("").map(x => parseInt(x))
return arr.reduce((a,b)=>a+b,0)
    // .reduce((a,b)=>a+b,0)
    // .split("").map(x => parseInt(x));

  
}