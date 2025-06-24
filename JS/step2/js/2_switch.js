/*
    switch는 조건식의 결과가 case에 해당되는 경우 사용
    (비교 연산자를 사용 안하였을 경우)
*/

// case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하세요'));
    switch(input % 2){
        case 0:
            alert("짝수");
            break;
        case 1:
            alert("홀수");
            break;
        default:
            alert("잘못 입력된 값입니다.");
            break;
    }
}

// todo. if에서 풀었던 lotto를 switch 문법으로 변형해보기
function lotto(){
    var numbValue = prompt("입력하실 번호는 ?");

    switch(numbValue){
        case "1":
            alert('1등');
            break;
        case "2":
            alert('2등');
            break;
        case "3":
            alert("3등");
            break;
        default:
            alert("낙첨");
            break;
    }
}

// case.2 switch문을 이용한 계산기
function calculator(){
    var firstNumb = Number(prompt('첫번째 숫자'));
    var lastNumb = Number(prompt('두번째 숫자'));
    var operator = prompt('사칙연산중 한개를 입력하시오.');

    switch(operator){
        case "+":
            console.log(firstNumb + operator + lastNumb + '=' + (firstNumb+lastNumb));
            break;
        case "-":
            console.log(firstNumb + operator + lastNumb + '=' + (firstNumb-lastNumb));
            break;
        case "*":
            console.log(firstNumb + operator + lastNumb + '=' + (firstNumb*lastNumb));
            break;
        case "/":
            console.log(firstNumb + operator + lastNumb + '=' + (firstNumb/lastNumb));
            break;
        default:
            console.log("올바른 값이 아닙니다.");
    }
}