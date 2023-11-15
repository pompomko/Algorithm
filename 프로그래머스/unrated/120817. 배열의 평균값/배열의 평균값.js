function solution(numbers) {
  
    //배열을 reduce로 다 더하고 numbers.length로 나눈다
 const sum =numbers.reduce((a,b)=> a+b);
 return sum/numbers.length
}