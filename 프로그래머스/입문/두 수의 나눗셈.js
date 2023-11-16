function solution(num1, num2) {
  var answer = 0;
  answer = Math.floor((num1 / num2) * 1000); //Math.floor 가 정수로 만들어줌
  return answer;
}
