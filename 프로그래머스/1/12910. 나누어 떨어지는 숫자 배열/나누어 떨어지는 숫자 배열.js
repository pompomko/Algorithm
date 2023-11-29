function solution(arr, divisor) {
    
         let answer =[]
    // arr 를 배열 밖으로 꺼내서 나머지 계산 실행 
    //빈배열이면 -1
    for (let i=0; i <arr.length ; i++){
        if (arr[i] % divisor ===0){
            answer.push(arr[i])
        }
    }if (answer.length ===0){
        answer.push(-1)
    }
      return answer.sort((a,b)=>a-b)
}
    
