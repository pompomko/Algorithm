function solution(price, money, count) {
    
    //price 를 count=i 만큼 한 값은 =  totalPrice = price += price * i
    //토탈 - 머니 == 음수라면 음수를 양수로 바꿔서 리턴 음수 아니라면 0 리턴 
    let totalPrice = 0;
    for (i=1; i <= count; i++) {
        totalPrice += price *i

}
    

    return money > totalPrice ? 0 : totalPrice-money;
}