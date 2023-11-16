// function solution(n) {

//   let arr =[];
//   //2로 나누어서 나머지가 0이라면 짝수
//   for(i =1 ;i<=n;i++){
//       if(i % 2 === 0){ arr.push(i)}
//   }

//   return arr.reduce((a,b)=>(a+b),0)
//   //나눈걸 배열안에 모두 집어널고 다 더한다

// }

function solution(n) {
  let arr = 0;
  //2로 나누어서 나머지가 0이라면 짝수
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      arr = arr + i;
    }
  }

  return arr;
  //나눈걸 배열안에 모두 집어널고 다 더한다
}
