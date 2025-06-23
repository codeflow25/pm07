/*
    조건문
    - 조건이 참일 경우 실행하고 거짓일 경우 실행하지 않는 분기문

    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		alert('273<100=>true');
	}
	alert('종료');  
*/

// case.1 현재 시각이 오후인가 오전인가를 알 수 있는 조건문
function amORpm(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    console.log(currentHour);

    if(currentHour<12){
        alert('오전');
    }else{
        alert('오후');
    }
    // 조건이 참이면 실행, 거짓이면 건너뛴다.
    // else if(if를 제외한 새로운 조건문) / else(~가 아닐때)
}

// case.2 현재 일자가 말일인지 아닌지
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    console.log(day);
    if(day<30){
        alert('말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}

// todo. 현재 시각에 따라 어느 식사시간인지 조건식 구하기 / 11시이전 : 아침, 15시 이전 : 점심, 그 후 : 저녁
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour<11){
        alert('아침 입니다.');
    }else if(hour<15){
        alert('점심 입니다.');
    }else{
        alert('저녁 입니다.');
    }
}

// case.3 숫자판별식
function numbJudgement(){
    var numb = prompt('숫자를 입력하세요.');

    if(numb>0){
        alert('양수입니다.');
    }else if(numb<0){
        alert('음수입니다.');
    }else{
        alert('잘못된 입력값입니다.');
    }
}

// todo. prompt를 통해 입력된 숫자가 홀수인지, 짝수인지 판별하는 조건식 구하기
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요.');
    if(numb%2==0){
        alert('짝수입니다.');
    }else if(numb%2==1){
        alert('홀수입니다.');
    }else{
        alert('잘못된 입력값입니다.');
    }
}

// case.4 사용자 id를 입력받아 입력값이 데이터값과 일치하다면 승인 메세지 출력
function userIDCheck(){
    var userID = prompt('아이디를 입력하세요.');
    if(userID == codeflow25){
        alert('접속을 승인합니다.');
    }else{
        alert('ID가 일치하지 않습니다.');
    }
}

// case.5 id&password 모두 일치할시 접속 승인
function userInfoCheck(){
    var userID = prompt('아이디를 입력하세요.');
    var userPW = prompt('비밀번호를 입력하세요.');
    if(userID == 'codeflow25' && userPW == '1234'){
        alert('접속을 승인합니다.');
    }else{
        alert('ID 혹은 PW가 일치하지 않습니다.');
    }
}

// ! 삼항처리
function uicTune(){
    var userID = prompt('아이디를 입력하세요.');
    var userPW = prmopt('비밀번호를 입력하세요.');
    (userID == 'codeflow25' && userPW == '1234')?alert('접속승인'):alert('접속불가');
}

// case.6 사용자 ID or PW가 틀렸을 시 오류 메세지 출력
function userInfoCheck(){
    var userID = prompt('아이디를 입력하세요.');
    var userPW = prompt('비밀번호를 입력하세요.');
    if(userID == 'codeflow25' && userPW == '1234'){
        console.log('접속을 승인합니다.');
    }else if(userID != 'codeflow25' && userPW != '1234'){
        console.log('모든 정보가 일치하지 않습니다.');
    }else if(userID != 'codeflow25'){
        console.log('ID가 일치하지 않습니다.');
    }else if(userPW != '1234'){
        console.log('PW가 일치하지 않습니다.');
    }
}
// todo.1 각 수를 프롬프트를 통해 입력받아 해당하는 조건의 메시지를 출력하라.
// ? 1이 입력될 경우 "1등! 10억!", 2가 입력될 경우 "2등! 5천!", 3이 입력될 경우 "3등! 3백!", 외 나머지 "낙첨되었습니다."
function lotto(){
    var numbValue = prompt('번호를 입력하세요.');
    if(numbValue == 1){
        alert('1등 10억');
    }else if(numbValue == 2){
        alert('2등 5천');
    }else if(numbValue == 3){
        alert('3등 3백');
    }else{
        alert('낙첨되었습니다.');
    }
}