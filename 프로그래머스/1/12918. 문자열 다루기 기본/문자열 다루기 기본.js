function solution(s) {
    // const a = (+s)  //연산기호를 넣으면 자바스크립트 특성상 숫자로 변경
    //문자 타입 구분후 삼항연산자 
    // const answer = +s >= 21 ? true : false 
    // const answer = isNaN(s) == true ? false : true
    // !isNaN(s)
    // 논리 연산자 or and 
    return (s.length === 4 || s.length === 6) && s == parseInt(s)
  
     
}