function solution(x) {
    let sum = 0;
    let arr = String(x).split("");
    //for문을 돌리는데 조건은 x의 각 자릿수를 더한후 % 사용 0이면 출력
    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    return (x % sum == 0) ? true : false;
}