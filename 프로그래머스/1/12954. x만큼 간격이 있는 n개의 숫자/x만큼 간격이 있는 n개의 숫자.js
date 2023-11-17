function solution(x, n) {
    var answer = [];
    for (i=1;i <= n ; i++){
        sum = x * i ,answer.push(sum)
    }  
    return answer;
}