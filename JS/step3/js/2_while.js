/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만,  용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/

// case.1 패스워드 '1234'가 입력되면 '접속승인' 틀린경우 '잘못입력'
function pwCheck(){
    while(true){
        var value = window.prompt('비밀번호를 입력하세요.');
        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert('잘못입력하셨습니다.');
        }
    }
}

// case.2 while Continue;
function whileContinue(){
    var i=1;
    while(i<=10){
        i++;
        continue;

        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

// case.3 while Break
function whileBreak(){
    var i=1;
    while(i<=10){
        break;
        i++;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

// case.4 'end'가 입력될때까지 숫자를 입력받아 값의 합을 출력
function sumNumb(){
    var i=1;
    var result=0;
    while(true){
        var numb=window.prompt(i + "번째 입력");
        if(numb=="end"){
            alert('입력이 종료됐습니다.');
            break;
        }else if(numb=="" || numb==" "){
            alert('입력에 오류가 있습니다. 다시 입력해주세요.');
        }
        result += Number(numb);
        document.write("현재까지의 총합 : " + result + "<br>");
        i++;
    }
}