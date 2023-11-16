function solution(angle) {
  //else if 문 사용해야겠다

  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else {
    return 4;
  }
}
console.log(solution);
