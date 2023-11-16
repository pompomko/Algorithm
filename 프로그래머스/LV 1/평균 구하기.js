function solution(arr) {
  //배열 안의 수를 모두 더하고 총합은 배열.length 로 나누기
  const sum = arr.reduce((a, b) => a + b);

  return sum / arr.length;
}
