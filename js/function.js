// 함수
function add(a, b) {
  return a + b;
}

let result = add(12, 16);
console.log(result);
// NaN(Not a Number)
console.log(add());
console.log(add(3));

// 익명함수
const myFunc = function add(a, b) {
  return a + b;
};
console.log(myFunc(3, 4));

// name() 내부용

const myFunc2 = function name(a, b) {
  return a + b;
};
console.log(myFunc2(3, 4));

//console.log(name(3, 4)); //ReferenceError: name is not defined

// 함수 안에 함수가 들어갈 수 있음
function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}

// b(); ReferenceError: b is not defined
a();

//-----------------------
// 호이스팅(hoisting) : 끌어올려서 실행
// function 함수 : O
// 익명함수 : X
//-----------------------
console.log(multiply(4, 6));
function multiply(x, y) {
  return x * y;
}
//console.log(myFunc3(12, 6));
//ReferenceError: Cannot access 'myFunc3' before initialization
const myFunc3 = function (x, y) {
  return x - y;
};

// 매개변수 초기화
function test(a, b = 52, c = 273, d) {
  d = d || 65;
  console.log(`a = ${a},b = ${b},c = ${c},d = ${d}`);
}
test(12, 13);
// 미 할당 함수 undefined, 함수에 초기값 부여 가능
test(12, 13, 14, 15);
// async function name(params) {

// }

// async (params) => {

// }
