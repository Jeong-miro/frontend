// 조건문
// if, if~else, if ~ else if ~ else
// 참 : 0을 제외한 숫자, '문자',[],{}
// 거짓 : 0, '', null, undefined, NaN

let date = new Date();
console.log(date);
//2026-08-04T02:42:06.290Z (ISO 8601 형식의 날짜/시간)

// 날짜에서 시간가져오기
let hour = date.getHours();
if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

// 사용자에게 숫자를 입력받아 양수 음수 구분

const x = 10;
if (x % 4) {
  if (x % 2) {
    console.log("홀수입니다");
  } else {
    console.log("짝수입니다");
  }
} else {
  console.log("4의배수입니다");
}

const a = 1;
const b = 2;

if (a < b) {
  console.log("a가 b보다 작다");
} else if (a > b) {
  console.log("a가 b보다 크다");
} else {
  console.log("a가 b와 같다");
}

// switch (파이썬 X)
// if ~ else if ~ else 와 같은 용도
// //
// switch (값) {
//   case 1: // 값이 1과 같다면
//     break;

//   default:
//     break;
// }

const firePower = 1;

switch (firePower) {
  case 1:
    console.log("레어");
    break;
  case 2:
    console.log("미디움");
    break;
  case 3:
    console.log("웰던");
    break;
  default:
    console.log("오류");
  //break;
}

const yootThorw = "도";

switch (yootThorw) {
  case "도":
    console.log("1칸 전진");
    break;
  case "개":
    console.log("2칸 전진");
    break;
  case "걸":
    console.log("3칸 전진");
    break;
  case "윷":
    console.log("4칸 전진");
    break;
  case "모":
    console.log("5칸 전진");
    break;
  default:
    console.log("무효");
}
// 월~목 : 6시 퇴근
// 금 : 12시 퇴근
// 토,일 : 휴무

dayOfWeek = "화";
switch (dayOfWeek) {
  case "월":
  case "화":
  case "수":
  case "목":
    console.log("6시퇴근");
    break;
  case "금":
    console.log("12시퇴근");
  case "토":
  case "일":
    console.log("휴무");
  default:
    console.log("잘못된 요일");
}
