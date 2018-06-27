function outter(){
    var title = "codng everybody"; // 외부함수의 지역변수인 title
    return function(){
        alert(title);
    }
}
var inner = outter();
inner();

// var inner = function(){ alert(title) } 과 같다
// 즉 outter함수가 return을 만나서 종료된 이후에도 외부함수의 지역변수에 접근할 수 있다.
