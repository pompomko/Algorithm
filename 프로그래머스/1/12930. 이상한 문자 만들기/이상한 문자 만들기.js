// function solution(a) {
//     // 단어 공백 단위로 나눠야함  s.split(" ")
//     //나눈후에는 인덱스 단위로 대문자 소문자 변경 
//     //마지막에는 다시 합쳐준다 .join("")
    
//     // s.charAt(0).toUpperCase()+s.slice(1) 맨 앞글자만 대문자 나머지 자른후 합침 for문..?
    
//     let arr = []; // 결과를 담을 빈 배열 생성
//     //여기서 단어 단위로 
//    // s = a.split(" ") 
// for (let i = 0; i < s.length; i++) { // 각 문자를 순회하면 확인
// 	if (i%2 === 0) { // 짝수 인덱스는
// 		arr.push(s[i].toUpperCase()); // 대문자
// 	} else { //아니라면
// 		arr.push(s[i].toLowerCase()) // 소문자
// 	}
// }
    
//     return arr.join(" ")
// }

function solution(s) {
    let answer = '';
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length -1) {
            answer += ' ';
        }
    }
    return answer;
}