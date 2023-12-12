function solution(a, b) {
    var answer = 0
    //각각의 수를 출력해서 곱한후 모두 더해야함 
    for (i =0 ; i < a.length ; i++){
        answer += a[i]*b[i]
    }
    
    return answer;
}