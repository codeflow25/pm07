/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.
    
    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * var a = 20;
    * ex> a = a + 10; > a += 10;

    
    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소

    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다.
    * != 좌변과 우변이 다르다.
    * ex> 
    if(273 < 52){
        alert('273은 52보다 작습니다.');
    }
    if(273 > 52){
        alert('273은 52보다 큽니다.');
    }
    참이면 실행하고 거짓이면 무시한다.

    ? 논리 연산자
    * &&(곱) 그리고, ||(합, verticalBar) 이거나
    
    ? 논리 부정연산자
    * !
    * ex>
    alert(!true);
    alert(!false);
    참을 거짓으로, 거짓을 참으로 바꾼다.

    ? 접근 연산자
    * .
*/

// case.1 10이 저장된 변수 a, 숫자 20, 그리고 문자 '30'을 더하여 result 변수에 저장 후 출력
function numbOP1(){
    var a = 10;
    var result = a + 20 + "30";
    console.log('합산 : ' + result);
}

// case.2 50이 저장된 변수 a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장 후 출력
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log('복합 연산 : ' + result);
}
// case.3 'hi'가 담긴 변수 a와 'WEB'이 담긴 변수 b를 합하여 'hi WEB'을 출력하기
function stringOP(){
    var a = 'hi';
    var b = 'WEB';
    console.log(a+b);
}
// case.4 ul,li 구조의 tag를 html 페이지에 삽입 및 출력해보자
function operatorEX(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hi</li>';
    list += '   <li>js</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// case.5 연산자가 뒤로 갔을 경우
function numberPlusAfter(){
    var number = 10;
    alert(number++); // 11 -> 10
    alert(number++); // 12 -> 11
    alert(number++); // 13 -> 12
    console.log(number); // 13
}
// case.6 연산자가 앞으로 올 경우
function numberPlusBefore(){
    var number = 10;
    alert(++number); // 11
    alert(++number); // 12
    alert(++number); // 13
    console.log(number); // 13
}
// todo 증감연산자 복합결과 예상하기
function numberPlusTodo(){
    var number = 10;
    console.log(number++); // 10
    console.log(--number); // 10
    console.log(++number); // 11
    console.log(number--); // 11
    console.log(number++); // 10
    console.log(++number); // 12
    console.log(--number); // 11
    console.log(number++); // 11
    console.log(++number); // 13
    console.log(number); // 13
}
// case.7 다음 코드를 증감연산자를 이용하여 간소화
function numberOperator(){
    var a = 10;
    // a = a + 1;
    // a += 1;
    // a -= 1;
    // a *= 1;
    // a /= 1;
    a %= 1;
    console.log('a = ' + a);
}
// case.8 숫자 10이 담긴 변수 a와 20이 담긴 변수 b의 크기를 비교해보기
function compareOp1(){
    var a = 10;
    var b = 20;
    var result = a <= b;
    console.log("a가 b보다 작거나 같나? " + result);
}
// case.9 숫자 10이 담긴 변수 a, 20이 담긴 변수 b가 같은지 비교하여 결과를 출력.
function compareOp2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log("a가 b와 같나? " + result);
}
// case.10 숫자 10이 담긴 변수 a, 20이 담긴 변수 b의 올바른 비교식을 세워라.
function compareOp3(){
    var a = 10;
    var b = 20;
    var result = a != b;
    console.log("a와 b가 다르다. " + result);
}
// case.11 a 변수에는 '여자', b 변수에는 '웹 디자이너' 담겨있는 두 값이 모두 맞는지 확인
function logicalOp1(){
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a == '여자') && (b == '웹디자이너');
    console.log('result = ' + result);
}
// case.12 a 변수에는 '남자', b 변수에는 '웹 퍼블리셔' 담겨있는 두 값이 하나라도 맞는지 확인
function logicalOp2(){
    var a = '남자';
    var b = '웹퍼블리셔';
    var result = (a == '여자') || (b == '웹퍼블리셔');
    console.log('result = ' + result);
}
// todo.1 다음 코드의 잘못된 결과를 올바르게 출력해보자.
function compareTodo(){
    // console.log(30>20>10);
    console.log(30>20 && 20>10);
    // 컴퓨터는 한번에 한개만 처리 가능
    // 30>20 -> true
    // true>10 -> 암시적형변환 / true -> 1
    // 1 > 10 == false
}
// todo.2 자신의 이름을 한글자씩 나눠 변수에 담은 후, 다시 하나의 변수에 담아서 출력
function fullName(){
    var a = '정';
    var b = '택';
    var c = '민';
    console.log(a+b+c);
}
// todo.3 다음 숫자가 출력되도록 연산자를 활용하여 코드 작성
function numberOperator(){
    var number = 10;
    console.log(number++) // 10
    console.log(++number) // 12
    console.log(number--) // 12
    console.log(--number) // 10
}