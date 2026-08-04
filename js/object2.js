// 자바 스크립트 내장 객체

// 1. 날짜/시간
const now = new Date();
console.log(now);
console.log("연도", now.getFullYear());
// 월 0부터 시작
console.log("월", now.getMonth() + 1);
console.log("일", now.getDate());
console.log("시", now.getHours());
console.log("분", now.getMinutes());
console.log("초", now.getSeconds());
console.log("날짜타입 => 문자열", now.toLocaleString());

// 2. 문자열
const msg = "hello javascript";
console.log("특정 위치 문자 반환", msg.charAt(4));
console.log("문자찾기", msg.match("ja"));
console.log("인덱스찾기", msg.indexOf("ja"));
console.log("특정 문자 변경", msg.replace("hello", "hi"));
console.log("특정 위치 문자 추출", msg.substring(6, 10));
console.log("대문자로변경", msg.toUpperCase());
console.log("소문자로변경", msg.toLowerCase());

// 3. 수학
console.log(Math.PI);
console.log(Math.floor(3.141592));
console.log(Math.ceil(3.141592));
console.log(Math.abs(-3.141592));
console.log(Math.max(5, 8, 9, 12, 4));
console.log(Math.min(5, 8, 9, 12, 4));
// 0 <= Math.random() < 1
console.log(Math.random() * 11);
// = 0~10 사이
console.log(Math.floor(Math.random() * 11));

//두개의 주사위를 던져서 나오는 눈의 합이 5 일때 실행 종료
//while, Math.random()

while (true) {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  if (dice1 + dice2 === 5) {
    console.log("(", dice1, ",", dice2, ")");
    break;
  } else {
    console.log("(", dice1, ",", dice2, ")");
  }
}

// 로또번호 6개 추출하여 배열에 담은 후 출력
// push() 1~45 Math.random()
// 반복문
// 이미 숫자가 있다면 push X
// i = 0;
// let lotto = [];
// while (lotto.length < 6) {
//   let randomchoice = Math.floor(Math.random() * 45) + 1;
//   if (randomchoice == lotto[i]) {
//     console.log("중복 번호 재 추첨");
//     return;
//   } else {
//     lotto[i] = randomchoice;
//     i++;
//     console.log("이번에 나온 숫자:", randomchoice);
//   }
// }
// console.log("로또 번호", lotto);
let lotto = [];

while (true) {
  let num = Math.floor(Math.random() * 46) + 1;
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
  if (lotto.length > 5) break;
}
console.log("로또 번호", lotto);
