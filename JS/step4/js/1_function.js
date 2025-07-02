// function(함수) - 중복코드가 많은 문제를 근본적으로 해결.(코드의 재사용 제거, 유지보수 용이성 등)

// case.1 다음 구문을 hello 라는 함수를 만들어서 유지보수 하기 쉽게 만들어보기
// case.1-1 수동반복
// document.write('안녕하세요.');
// document.write('안녕하세요.');
// document.write('안녕하세요.');
// document.write('안녕하세요.');

// case.1-2 반복문 사용
// var comment = "Hello";
// for(var i=0; i<4; i++){
//     document.write(comment,"<br>");
// }

// case.1-3 원할 때만 실행
function commentFunc() {
    var comment = "Hello";
    for (var i = 0; i < 4; i++) {
        document.write(comment, "<br>");
    }
}

// case.2 매개변수가 있는 함수 만들기
function commentParam(count, comment) {
    for (var i = 0; i < count; i++) {
        document.write(comment, "<br>");
    }
}
function sumParam(num1, num2) {
    var result = num1 + num2;
    alert("두 수의 합은 ? = " + result);
}
// case.3 매개변수가 없어도 있는것처럼 사용하는 가변인자함수(arguments)
/*
    ? arguments는 object(객체)
    ? 기존의 배열 등의 객체들은 내부공간이 확실히 정의되있지만, 가변인자함수는 그렇지 않다.
    ? length는 있으나 실제 존재하는 data가 아닐 수 있다.
*/
function sum() {
    // console.log(typeof(arguments) + " : " + arguments.length);
    var willReturn = 0;
    for (var i = 0; i < arguments.length; i++) {
        willReturn += arguments[i];
    }
    console.log(willReturn);
}

// case.4 "자신의 이름"의 나이는 "자신의 나이" 입니다. 를 arguments를 이용하여 만들어보기
function showInfo() {
    alert(arguments[0] + "이 나이는" + arguments[1] + "세 입니다.");

    console.log("index 0 = " + arguments[0] + "type : " + typeof (arguments[0]));
    console.log("index 1 = " + arguments[1] + "type : " + typeof (arguments[1]));
    // 입력순서를 임의로 수정 및 변경이 불가하여 내부에서 case 감지하여 보정할 수 있는 logic이 필요.
}

/*
    return
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 외부에서 접근 불가
    * 이 때 매개변수를 활용하면 함수 내부로 접근 가능, return은 이와 반대로 밖으로 내보내는 것
    * 매개변수는 외부에서 내부로 들어오는 입력, return은 내부에서 외부로 나가는 출력
*/
// ex
function f(x) {
    return x * x;
}
// alert(f(6));
// document.write(f(9));

// case.5 위 sum 함수를 return으로 변형해보기
function sumAllEx() {
    var willReturn = 0;
    for (var i = 0; i < arguments.length; i++) {
        willReturn += arguments[i];
    }
    return willReturn;
}
// case.6 returnValue를 변수에 저장하고 전달하기
function sumReturn1(num1, num2) {
    var result = num1 + num2;
    return result;
}

// var testValue = sumReturn1(5,12);
// console.log(testValue);
// alert(testValue);
// document.write(testValue);

// case.7 다음 실행구문으로 전달받은 매개변수를 계산하여 결과 출력하는 함수 만들기.
/*
    * 실행구문
    document.write("1 결과 = " calculator("+", 20, 10) + "<br>");
    document.write("2 결과 = " calculator("-", 20, 10) + "<br>");
    document.write("3 결과 = " calculator("*", 20, 10) + "<br>");
    document.write("4 결과 = " calculator("/", 20, 10) + "<br>");
    document.write("5 결과 = " calculator("%", 20, 10) + "<br>");
    * 결과
    1번 = 30
    2번 = 10
    3번 = 200
    4번 = 2
    5번 = 잘못된 연산자
*/
function calculator(op, numb1, numb2) {
    var result = '';
    switch (op) {
        case "+":
            result = numb1 + numb2;
            break;
        case "-":
            result = numb1 - numb2;
            break;
        case "*":
            result = numb1 * numb2;
            break;
        case "/":
            result = numb1 / numb2;
            break;
        default:
            result = "잘못된 값 입니다.";
            break;
    }
    return result;
}

// todo.3 위 예제에 추가로 사칙연산 부분을 함수로 변환해보기
/* 
//* 실행구문
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
//* 결과 
결과 = 30
결과 = 10
결과 = 200
결과 = 2
결과 = 잘못된 연산자 입니다.
*/
function calculator2(op, numb1, numb2) {
    var result = '';
    switch (op) {
        case "+":
            result = add(numb1, numb2);
            break;
        case "-":
            result = sub(numb1, numb2);
            break;
        case "*":
            result = mul(numb1, numb2);
            break;
        case "/":
            result = div(numb1, numb2);
            break;
        default:
            result = "잘못된 연산자입니다.";
            break;
    }
    return result;
}

function add(numb1, numb2) {
    var addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1, numb2) {
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1, numb2) {
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1, numb2) {
    var divResult = numb1 / numb2;
    return divResult;
}

// case.8 함수를 변수에 담기
function hello(name){
    return name + "님. 환영합니다.";
}
var func = hello;

// case.9 매개변수에 함수를 담기
function hi(){
    // return "hello?";
    console.log("hello");
}
function hi2(){
    // return "hi !";
    console.log("hi");
}
function execute(func){
    func();
}

// case.10 button click -> 매개변수값으로 넘긴 함수 실행하기
function welcome(){
    alert("환영합니다. 고객님");
}
$(document).ready(function(){
    $("#case10").click(welcome);
});
// case.11 return value로 함수를 전달하기
function createHello(){
    function hello2(user){
        document.write(user + "welcome!");
    }
    return hello2;
}
var result = createHello();