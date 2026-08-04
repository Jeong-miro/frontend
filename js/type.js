// 자료형
// number : 정수 실수
// boolean : true false
// string : 문자
// undefined null
// 숫자,문자,불리언
let a, b, c, d, e, f;

console.log(typeof a); // undefined(변수 선언 후 값 미할당)

a = 2;
b = "안녕하세요";
c = 3.141592;
d = new Date();
e = { name: "hong", age: 20 };
f = null; // 값이 없다고 고의적으로 선언
e = 1 > 2; // true,false 소문자로 시작(파이썬은 대문자)

console.log("a 타입? ", typeof a); //number
console.log("b 타입? ", typeof b); //string
console.log("c 타입? ", typeof c); //number
console.log("d 타입? ", typeof d); //object
console.log("e 타입? ", typeof e); //object
console.log("f 타입? ", typeof f); //object
console.log("e 타입? ", typeof e); //object

// 연산자 : 산술( + - * / % )
// 비교연산자 : (==, ===, !=, !==, >, >=, <, <= )
// 비교할 때 타입과 값을 같이 비교
// ===, !== (비교할 때 타입만 비교)
// a = a + 1 == a++
// a = a - 1 == a--
// 단항 (++, --)
// 복합대입 (+=, ==,*=,/=...)
// && (== and) || (== or)
// 삼항연산자 : 조건? : 참 : 거짓

let z = 14;
let result = (z > 10 && z <= 20) || z % 3 === 0;
console.log(result);

let bool1 = true;
result = bool1 ? "참" : "거짓";
console.log(result);

console.log(z % 2 === 0 ? "짝수" : "홀수");
