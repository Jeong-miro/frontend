// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];

// }

// for (const element of object) {

// }

// while (condition) {
//     반복문 안에서 해야할 일들
// }

// do {

// } while (condition);

let arr2 = ["a", "b", 1, 2, 1.5, true];

for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];
  console.log(element);
}

console.log("=======");
let i = 0;
while (i < arr2.length) {
  console.log(arr2[i]);
  i++;
}
console.log("=======");
// index 사용하지 않고 요소 자체를 즉시 꺼내서 사용 할 수 있다.
for (const element of arr2) {
  console.log(element);
}

console.log("=======");

arr2.forEach((item) => console.log(item));

console.log("=======");

i = 10;
do {
  console.log(i);
  i++;
} while (i <= 5);
