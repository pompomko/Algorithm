function solution(n) {
  const answer = n.toString().split("").map(Number);
  //순서뒤집기  숫자를 문자열로 만들고 .(``)기준으로 잘라서 배열,맵으로 배열로변환
  const answer1 = [...answer].reverse();
    //그리고 리버스로 순서뒤집기
  return answer1;
}
