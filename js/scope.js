// 변수명
// 영문,한글,숫자,특수문자(&, _) 가능
// 숫자로 시작 불가능
// 공백(스페이스) 불가능
// 예약어 불가능

// 변수 범위
// 블록( {} ) 스코프
// 함수 스코프
function foobar() {
  var foo = 5;
  console.log(foo);
}
//console.log(foo);
// let, var 둘 다
//ReferenceError: foo is not defined
{
  var a = 5;
}
console.log(a);
// var 가능, let 불가
{
  // 지역변수
  let value1 = 7;
}
//console.log(value1);
// ReferenceError: value1 is not defined
{
  let value2 = 7;
}
let value2 = 10;

console.log(value2);

const value3 = 9;

{
  //const value3 = 20;
  console.log(value3);
}
console.log(value3);
