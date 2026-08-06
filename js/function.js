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
//-----------------
//화살표 함수
//-----------------
console.log("--- 화살표 함수 ---");
const myFunc4 = (a, b) => {
  return a + b;
};
console.log(myFunc4(3, 4));
// 화살표 함수 안 실행할 구문이 한줄이라면, {} 생략 가능
// return 생략 가능
const myFunc5 = (a, b) => a + b;

console.log(myFunc5(3, 4));

// async function name(params) {

// }

// async (params) => {

// }

//---------------
// 내장 함수
//---------------
console.log(encodeURI("http://localhost:8080/basic/info.html?name=홍길동"));
//http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99
console.log(encodeURIComponent("http://localhost:8080/basic/info.html?name=홍길동"));
//http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99

console.log(decodeURI("http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99"));
console.log(
  decodeURIComponent("http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99"),
);

// parseInt() / parseFloat() / Number()
console.log(parseInt("123"));
console.log(parseInt("123px"));
console.log(parseFloat("3.14"));
console.log(parseFloat("3.14abc"));
console.log(Number("123"));
console.log(Number("3.214"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("123aB")); //NaN

// is NaN()
console.log(isNaN("123"));
console.log(isNaN("abc"));

// setTimenout(함수, ms)
const timer = setTimeout(() => {
  console.log("3초 후");
}, 3000);
console.log("마무리");
// 비동기 async
// 마무리 실행 이후 3초 후 출력
clearTimeout(timer);

//setInterval(() => {}, interval); 함수, 시간간격
let count = 0;
const id = setInterval(() => {
  console.log(++count);

  if (count === 5) {
    clearInterval(id);
  }
}, 1000);
