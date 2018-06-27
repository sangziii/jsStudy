// 클로저와 관련해서 자주 일어나는 예제

var arr = [];
for(var i=0; i<5; i++){
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}

// i의 값은 우리가 정의함 함수의 외부변수의 값이 아니기 때문

for(var index in arr){
    console.log(arr[index]());
}

/*
    arr[0] = function(console.log(0))
    arr[1] = function(console.log(1))
    arr[2] = function(console.log(2))
    arr[3] = function(console.log(3))
    arr[4] = function(console.log(4))
*/

/*
    arr[0]
*/
