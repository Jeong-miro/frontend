// 1. 두 개의 숫자를 받아서 더한 결과를 반환하는 함수 작성 sum()
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log("=====");

// 2. 함수 안에서 1~10까지 더한 결과를 출력하는 함수 작성

function addsum() {
  let add10 = 0;
  for (let i = 0; i < 11; i++) {
    add10 += i;
  }
  console.log(add10);
}
addsum();
console.log("=====");
// 3. mutliple(num) 정의 - num 이 3의 배수라면 "박수" 출력 / "통과"

function multiple(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
multiple(1);
console.log("=====");
// 4. mutliple2(num) - 3의 배수인 경우 "박수" 출력
// 9의 배수인 경우 "박수 * 2 " / "통과"
function multiple2(num) {
  if (num % 3 == 0) {
    if (num % 9 == 0) {
      console.log("박수*2");
    } else {
      console.log("박수");
    }
  } else {
    console.log("통과");
  }
}
multiple2(6);
multiple2(9);
console.log("=====");
// 5. pass(outline, law) - 두 과목 합해서 120점 이상이면 합격
// 단, 한 과목이라도 40점 미만이면 과락으로 불합격
function pass(outline, law) {
  const jumsu = outline + law;
  if (outline + law > 120) {
    if (outline < 40 || law < 40) {
      console.log("과락");
    } else {
      console.log("합격");
    }
  }
}

pass(40, 99);
console.log("=====");

function pass2(outline, law) {
  const jumsu = outline + law;

  if (outline >= 40 && law >= 40 && jumsu >= 120) {
    console.log("합격");
  } else {
    console.log("과락");
  }
}
pass2(90, 39);
