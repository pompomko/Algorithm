function solution(s) {
    const arr = [...s];
    arr.sort()
  arr.reverse()
    var answer =  arr.join('');
    //문자 정렬 하는데 대문자는 뒤로 보내고 다시 정렬
    
    return answer;
}