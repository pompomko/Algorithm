function solution(n) {
    
    //약수를 구하는 방법...자기 자신을 나눴을때 값이 1과 자기자신   나머지가0이되어야함
    let i = 1;
    let arr =[]
    while (i <= n){
        if(n % i === 0){
            arr.push(i)
        }
        i++
    }
    
     return arr.reduce((a,b)=>{return (a+b)},0)
}

  
