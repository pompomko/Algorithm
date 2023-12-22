function solution(s) {
    
    
    //해당 숫자표에 맞다면 전부 숫자로 바꿔야함 
    let  answer = s.replace(/zero/g, 0);
    let  answer1 = answer.replace(/one/g, 1);
    let  answer2 = answer1.replace(/two/g, 2);
    let  answer3 = answer2.replace(/three/g, 3);
    let  answer4 = answer3.replace(/four/g, 4);
    let  answer5 = answer4.replace(/five/g, 5);
    let  answer6 = answer5.replace(/six/g, 6);
    let  answer7 = answer6.replace(/seven/g, 7);
    let  answer8 = answer7.replace(/eight/g, 8);
    let  answer9 = answer8.replace(/nine/g, 9);
    return parseInt(answer9)
}