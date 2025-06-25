/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
}
*/

// case.1 이름을 10번 출력하기
function namePrint10(){
    var userName = "Jeong";
    for(var i=1; i<=10; i++){
        console.log(i+ '. ' + userName);
    }
}

// case.2 이름을 1,000번 출력하기
function namePrint1000(){
    var userName = "Jeong";
    for(var i=1; i<=1000; i++){
        console.log(i + '. ' + userName);
    }
}

// todo. 위 1000번 출력 예제에서 홀수번째만 출력되도록 반복문을 짜보기
function namePrint500(){
    var userName = "Jeong";
    for(var i=1; i<=1000; i+=2){
        console.log(i + '. ' + userName);
    }
}

// case.4 자신이 좋아하는 과일 4개를 배열로 배치하고 alert 으로 출력.
function favorFruit(){
    var data = ["딸기","메론","수박","귤","샤인머스켓"];
    for(var i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

// todo. 화면과 같이 출력하기
function arrayFor(){
    var data = ["변수","형변환","연산자","조건문if","조건문switch","반복문while","반복문for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i=0; i <data.length; i++){
        document.write(swapNumb[i]+"번째 내용 = " + data[i] + "<br>");
    }
}

// todo. 배열식을 switch 문으로 변환하여 결과를 출력해보기
function arrayFor2(){
    var data = ["변수","형변환","연산자","조건문if","조건문switch","반복문while","반복문for"];
    // 변수가 1개 더 필요하나, 배열은 사용금지
    var swapNumb = '';
    for(var i=0; i<data.length; i++){
        switch(i){
            case 0:
                swapNumb = "첫";
                break;
            case 1:
                swapNumb = "두";
                break;
            case 2:
                swapNumb = "세";
                break;
            case 3:
                swapNumb = "네";
                break;
            case 4:
                swapNumb = "다섯";
                break;
            case 5:
                swapNumb = "여섯";
                break;
            case 6:
                swapNumb = "일곱";
                break;
            default:
                i = 'x';
                break;
        }
        document.write(swapNumb + "번째 내용 = " + data[i] + '<br>');
    }
}

// case.4 역반복으로 배열 호출하기
function reverseFavorFruit(){
    var arr = ['딸기','메론','수박','귤'];
    for(var i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

// case.5 for에서의 continue
function forContinue(){
    for(var i=0; i<10; i++){
        continue;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

function continueEx(){
    let text = '';
    for(let i=0; i<10; i++){
        if(i ==3){
            continue;
        }
        text += i;
    }
    console.log(text);
}
/*
    1. text 라는 변수를 문자열로 저장.
    2. i=0 이고 i가 10보다 작을때 -> 만약 i가 3이라면?(거짓) 실행X -> text 변수에 i를 더한다 / text = 0
    3. 증감식에 의해 i가 증가하여 i=1 ...(반복)
    4. 만약 i가 3이라면?(참) 실행 -> continue (건너뜀) -> text 변수에 i를 더하지 않는다.
    5. i=4 이고 ...(반복)

*/

// todo. 과제 continue를 활용하여 1~10까지 값을 구하지만 짝수들만 더해서 출력하기
// ! 2, 6, 12, 20, 30만 출력돼야 함
function todoContinue(){
    
}

// case.6 for에서의 break
function forBreak(){
    for(var i= 1; i<10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write("최종 i = " + i + "<br>");
}