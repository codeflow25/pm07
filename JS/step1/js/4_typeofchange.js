/*
    ? 형변환
    * JS - "10" + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
    ! 암시적형변환 - js Engine이 자동으로 변환.  /  명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린 + 숫자 = 숫자.
    * 3. 불린 + 문자 = 문자.
    
    ? 명시적 형변환
    * method 나 lib Core func를 이용하여 강제로 숫자 -> 문자 로 변환.
*/

// case.1 자신의 나이를 입력받고 20을 더한 값 출력
function agePlus(){
    var age = Number(prompt("현재 나이를 입력하시오."));
    var result = age + 20;
    console.log(typeof(age));
    console.log(result);
}

// case.2 강제 숫자 - 문자 형변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 20;
    console.log('result 변수의 최종 자료형은 ' + typeof(result) + ', 담긴 값은 ' + result + '입니다.');
}

// case.3 강제 불린 - 숫자 형변환
function forcedNumber(){
    var result = 2 + true;
    console.log('result 변수의 최종 자료형은 ' + typeof(result) + ', 담긴 값은 ' + result + '입니다.');
}

// case.4 강제 불린 - 문자 형변환
function forcedString2(){
    var a = '2';
    var result = a + true;
    console.log('result 변수의 최종 자료형은 ' + typeof(result) + ', 담긴 값은 ' + result + '입니다.');
}
/*
    ? String()
    * String(value); - 문자형으로 변환

    ? .toString()
    * Number.toString(); - 문자형(진수)변환

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형 변환.
*/

// case.5 test1에 들어있는 숫자를 문자로 명시적 형변환
function stringNumb(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + ' = ' + test1);
    var result = String(test1);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test = 15;
    console.log("변환 전 : " + typeof(test) + ' = ' + test);
    var result = test.toString();
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
function fixtoNumb(){
    var pi = 3.1415926535;
    console.log("변환 전 : " + typeof(pi) + ' = ' + pi);
    var result = pi.toFixed(2);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}

/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
*/

// case.6 test에 들어있는 문자를 숫자로 형변환
function numbString(){
    var test = '300.6235';
    console.log("변환 전 : " + typeof(test) + ' = ' + test);
    // var result = Number(test);
    // var result = parseInt(test);
    var result = parseFloat(test);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}

// todo.1 변수 test에 들어있는 숫자 100을 String을 사용하여 문자형 변환 후 result로 출력(typof 검수 필요)
function todo1(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + '=' + result);
}
// todo.2 변수 test에 들어있는 숫자 100을 toString을 사용하여 문자형 변환 후 result로 출력(typof 검수 필요)
function todo2(){
    var test = 100;
    var result = test.toString();
    console.log(typeof(result) + '=' + result);
}
// todo.3 암시적 형변환을 이용한 문자형 변환
function todo3(){
    var test = 100;
    var result = test + '';
    console.log(typeof(result) + ' = ' + result);
}
// todo.4 문자형을 숫자로 변환하기 (typeof 검수 필요)
function todo4(){
    var test = '100.51';
    var result = parseFloat(test);
    console.log(typeof(result) + ' = ' + result);
}
// todo.5 위 상황을 Number로 대체해보기
function todo5(){
    var test = '100.51';
    var result = Number(test) + 20 + Number("30");
    console.log(typeof(result) + ' = ' + result);
}