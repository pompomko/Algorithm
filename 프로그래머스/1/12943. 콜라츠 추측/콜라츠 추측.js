function solution(num) {
    
    var answer = 0;
    //수를 받으면 짝수라면 2나누기 홀수라면 3곱하고1더하기 500번 반복 
     while (num != 1) {
        if (num % 2 == 0){
            num /= 2;
        } else {
            num = (num * 3) + 1;
        }
        answer += 1;
    }
    if (answer >= 500) {
        return -1;
    } else {
        return answer;
    }
}