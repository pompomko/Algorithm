function solution(strlist) {
   var answer = [];
    for(var i = 0; i < strlist.length; i++){
        answer[i] = strlist[i].length; // answer[i]값에 strlist[i]의 길이 넣기
    }
    return answer;
}
