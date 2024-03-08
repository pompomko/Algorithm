function solution(n) {
  let count = 0;

  for (let a = 1; a <= Math.sqrt(n); a++) {
    if (n % a === 0) {
      let b = n / a;
      if (a !== b) {
        count += 2;
      } else {
        count++;
      }
    }
  }

  return count;
}