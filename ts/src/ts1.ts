export {};
// export {}; = 같은파일로 인식될 때
// // 타입 지정

const car: string = "BMW";
let car2: string = "BMW";

// 선언과 다른 타입 사용 불가능
// car2 = 3;

let age: number = 23;
let isAdult: boolean = false;
let n: null = null;
let u: undefined = undefined;

let fruits: string[] = ["사과", "바나나", "딸기"];
//fruits.push(95);
let scores1: number[] = [95, 78, 100];
let mixed: (string | number)[] = ["사과", "바나나", 78, "딸기"];

//타입 추론
let fruits2 = ["사과", "바나나", "딸기"];

const vegetables: ReadonlyArray<string> = ["carrot", "broccoli", "spinach"];
const vegetables2: readonly string[] = ["carrot", "broccoli", "spinach"];
const scores2: readonly number[] = [100, 95, 95];

// ...
const newArray = [...scores2, 85];
console.log(newArray);

// 타입스크립트에서 추가된 데이터 타입
// 튜플 : 배열인데 요소의 개수와 각 위치의 타입을 미리 정해놓은 배열
let person: [string, number] = ["Alice", 25];
console.log(person[0].toLocaleLowerCase());

person[0] = "Tiger";
person[1] = 26;
console.log(person);

function getUserInfo(): [string, number, boolean] {
  return ["Bob", 30, true];
}
// console.log(getUserInfo());
const [username, age1, isUserAdult] = getUserInfo();

// 추론을 이용한 튜플 선언
// 상수처럼
const person2 = ["Alice", 25] as const;
//person2[0] = "three";

// 배열 선언
const array1: number[] = [];
// 튜플 선언
const tuple1: [number, string] = [25, ""];

// any : js  와 같은 개념(거의 자주 사용하지 않음)
// any : 타입 검사 포기
let num;
num = 95;
num = "Nine";

let randomValue: any = 10;
randomValue = "hello";
randomValue = true;

// unknown : 타입을 몰라 사용 불가
// 확인 후 사용
let unknownValue: unknown = 10;
unknownValue = "Hello";
//console.log(randomValue.length);
console.log(unknownValue);

//let strLength: number = unknownValue.length;
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log(strLength);
}

// void : 반환값이 없는 함수
function message(msg: string): void {
  //return msg;
  console.log(msg);
}

const print1 = (): void => {
  console.log(print1);
};

// printLength(): 반환값 없음
// 파라메터 text => string or null
function printLength(text: string | null): void {
  if (text === null) {
    console.log("N text");
    return;
  }
  console.log(`${text.length}`);
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num): void => {
  console.log(num);
});

// never : 에러를 반환하거나 절대 종ㄹ되지 않는 함수의 타입으로 사용
// x 파라메터 : string,number,boolean
function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
  } else if (typeof x === "number") {
  } else if (typeof x === "boolean") {
  } else if (typeof x === "object") {
  } else {
    const unreachable: never = x;
    throw new Error("Unhandled type : " + unreachable);
  }
}

handleValue("Hello");
handleValue(42);
handleValue(true);
handleValue({ name: "John" });

// 열거형 : 관련있는 상수들을 하나의 이름으로 묶어놓은 타입
enum Color {
  Red,
  Green,
  Blue,
}
console.log("enum");
console.log(Color.Green); // 1 : red부터 0
let favoriteColor: Color = Color.Green;
// type : 원하는 타입을 하나 만든 후 이름을 붙일 때 사용

// 주소 변수 선언 ; 문자 , 숫자 허용

type Addr = string | number;
let userAddr: Addr;

// | (union)
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

type PointTuple = [number, number];
const tuple2: PointTuple = [10, 20];
//tuple2 = [10, 20];

type Name = {
  firstName: string;
  lastName: string;
};

// Employee => firstName, lastName,employeeId

// & : 이미 선언된 타입 사용시

type Employee = Name & {
  employeeId: number;
};

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
};

// type 선언시 모든 키에 대한 value string 일 때
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
  name: "alice",
  addr: "seoul",
};

// 선언된 타입에서 특정 키만 제거하고 사용 : Omit

type Menu = {
  name: string;
  category: string;
  price: number;
};

// BestMenu => name,category  만 필요
type BestMenu = Omit<Menu, "price">;
let menu: Menu = {
  name: "피자",
  category: "",
  price: 35000,
};
let best: BestMenu = {
  name: "피자",
  category: "",
};

// 선언된 타입에서 특정 키만 가져오기 : Pick
type MenuOnlyCategory = Pick<Menu, "category">;

// interface : 객체 타입 지정시 주로 사용
// let user1 = { name: "Alice", age : 25}
let user1: object;
user1 = { name: "Alice", age: 25 };
console.log(user1);
//console.log(user1.name);

interface User {
  name: string;
  age: number;
}

let user: User = { name: "David", age: 30 };
console.log(user.name);

// gender => 선택적 속성
// ? : 들어올수도 있고 아닐수도 있음
interface User2 {
  name: string;
  age: number;
  gender?: string;
}
let user2: User2 = { name: "David", age: 30 };
let user3: User2 = { name: "David", age: 30, gender: "남자" };
user3.name = "Teddy";

interface Car {
  readonly model: string;
  year: number;
}

let car1: Car = { model: "Toyota", year: 2026 };
// car1.model = "현대"; : readonly 타입으로 처음 선언 후 변경 X
interface Member2 {
  [key: string]: string;
}

interface Student {
  name: string;
  id: number;
  [key: number]: string;
}
let student: Student = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
  3: "C",
};

// type + interface
type Score = "A+" | "A" | "B" | "C" | "D" | "F";
interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

// 함수 타입 정의
type Func1 = {
  name: string;
  (a: number, b: number): number;
};

interface Add {
  (a: number, b: number): number;
}

const add: Add = function (a, b) {
  return a + b;
};
console.log(add(5, 1));

// 인라인 지정
function sub(a: number, b: number): number {
  return a - b;
}

// 인터페이스 확장(type & )
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

// Car2 속성 그대로 구현
class Truck implements Car2 {
  color: string;
  wheels: number;
  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }
  start(): void {
    console.log("Truck");
  }
  // 본인만의 메서드 추가 가능
  drive(): void {
    console.log("Truck is driving");
  }
}

const myTruck = new Truck("red", 6);
myTruck.start();

interface Person {
  name: string;
  age: number;
}
interface Employee2 extends Person {
  employeeId: number;
  department: string;
}
let employee2: Employee2 = {
  name: "",
  age: 30,
  employeeId: 1001,
  department: "HR",
};

// type 도 extends 가능
interface BestMenu2 extends Menu {
  rank: number;
}

const best2: BestMenu2 = {
  name: "아메리카노",
  category: "coffee",
  price: 4500,
  rank: 3,
};

interface Menu2 {
  name: string;
  category: string;
  price: number;
}

// type 에서 interface 가져오기

type BestMenu3 = Menu2 & { rank: number };

// as 타입(HTMLFormElement 같은거) : type assertion
let someValue: unknown = "This is a string";
// someValue.length << 무슨타입인지 모름
let someValueLength = (someValue as string).length;
// 혹은
// if (typeof unknownValue === "string") {
//   let strLength: number = unknownValue.length;
//   console.log(strLength);
// }
