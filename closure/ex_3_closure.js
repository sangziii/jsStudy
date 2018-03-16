// 클로저의 효용 : private 변수
// 소프트웨어에서 아무나 변수에 담긴 정보를 바꿀 수 없게 해줌
// factory_movie 함수가 return을 만나 종료되었을때, 그 함수의 지역변수인 title의 값을 바꿀 수 있는 건
// factory_moive의 내부함수인 get_title 과 set_title을 통해서만 가능하다.
// -> title이라는 변수를 아무나 수정할 수 없기 때문에, 맥락에 영향을 주지 않게되고,
// set_title로 title의 값을 변경할 때

function factory_movie(title){

    return {

        //객체 안에 있는 함수를 담고 있는 변수 => 메소드(내부함수)
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            if(typeof _title === 'String'){
                title = _title;
            } else {
                console.log('제목은 문자열이어야 합니다.');
            }
        }

    }

}

// 두개의 객체 생성 -> 외부함수의 지역변수(title)에 접근할 수 있다.
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');
console.log(ghost.get_title());
