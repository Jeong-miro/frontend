// 객체
// key:value
// value:문자 숫자 불리언 배열 ....

const person1 = {
  name: "김철수",
  age: 25,
  married: false,
};

console.log(person1["name"]);
console.log(person1.age);
console.log(typeof person1);

// property 추가
person1["bloodtype"] = "A";
person1.jop = "programmer";
console.log(person1);

// property 수정
person1["age"] = 26;
console.log(person1);

const person2 = {
  name: ["bob", "Smith"],
  //   name: {
  //     first : "bob",
  //     last : "Smith"
  //   }
  age: 32,
  gendermale: "male",
  interests: ["music", "skiing"],
};

console.log(person2.name);
console.log(person2.name["first"]);
console.log(person2.name.last);
console.log(person2.interests);

const person3 = { ...person1 };
console.log(person3.name);
person3.name = "홍길동";
console.log(person1.name);
console.log(person3.name);

// const person4 = { ...person2 };
// person4.name[0] = "tomato";
// console.log("원본", person2.name);
// console.log("복사본", person4.name);

const person4 = {
  ...person2,
  name: [...person2.name],
  interests: [...person2.interests],
};
person4.name[0] = "tomato";
console.log("원본", person2.name);
console.log("복사본", person4.name);

// 객체 출력
for (const key in person4) {
  const element = person4[key];
  console.log(element);
}

const student = {
  name: "성춘향",
  kor: 92,
  eng: 88,
  sci: 77,
};

const teacher = {
  tname: "설리번",
  age: 50,
};

const obj = { ...student, ...teacher };
console.log(obj);
console.log("=========");
// obj
let { eng, kor, ...others } = obj;
console.log(eng, kor, others);

const arr4 = [1, 2, 3, 4];
const [num1, ...num2] = arr4;
console.log(num1, num2);
