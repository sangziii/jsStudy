// 외부함수
function outter(){
    var title = "codng everybody"; // 외부함수의 지역변수인 title
    // 내부함수
    // 내부함수에서 외부함수의 지역변수에 접근할 수 있다 : 클로져
    var inner = function(){
        console.log(title);
    }
}
outter();
