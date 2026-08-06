// 배열 (== 파이썬 리스트)
// 배열 값으로는 제한이 없다
let arr1 = [];
let arr2 = ["a", "b", 1, 2, 1.5, true];
console.log(arr1, arr1.length);
console.log(arr2, arr2.length);
console.log(arr2[1]);

// 배열 함수
// 1.push() : 뒤에 추가
arr1.push(25);
arr1.push(35);
arr1.push(45);
console.log(arr1, arr1.length);

// 2. unshift() : 맨 앞에 추가
arr1.unshift("복숭아");
console.log(arr1, arr1.length);

arr1[1] = "사과";
console.log(arr1, arr1.length);

// 3. pop() : 마지막 요소 삭제
arr1.pop();
console.log(arr1, arr1.length);

// 4. shift() : 첫번째 요소 삭제
arr1.shift();
console.log(arr1, arr1.length);

// 5. join("연결문자열") : 각각 요소를 연결해서 표현
console.log(arr2.join("-"));
// 6. concat() : 다른 배열과 합치기
console.log(arr2.concat(arr1));
// 7. slice(1,3) : 1번부터 3번전 까지 잘라서 보여줌
console.log(arr2.slice(1, 3));
console.log(arr2.sort());
// 8. indexOf(찾고자하는요소) : 요소가 있다면 index 반환 / 없으면 -1
console.log("1위치 찾기", arr2.indexOf(1));
console.log("c위치 찾기", arr2.indexOf("c"));

//복사(얕은복사)
console.log("=== 얕은복사 ===");
let arr3 = arr2;
console.log("arr2", arr2);
console.log("arr3", arr3);

arr3[1] = 33;
console.log("arr2", arr2);
console.log("arr3", arr3);

console.log("=== 깊은복사(값 복사) ===");
// ... : spread
arr3 = [...arr2];
arr3[2] = 42;
console.log("arr2", arr2);
console.log("arr3", arr3);

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];

let sumLetArr = [...varArr1, ...varArr2];
console.log(sumLetArr);

const fruits = new Array("사과", "망고", "바나나", "수박");
//fruits.forEach((i) => console.log(i));
fruits.forEach((item, idx) => console.log(idx, item));
console.log(fruits);

// 배열
const array1 = [];
array1.forEach(() => {});
array1.forEach(function () {});

const array2 = [15, 6, 9, 13, 22, 27];
// array2 에서 20보다 큰 요소를 찾기(첫번째 요소)
console.log(array2.find((item) => item > 20));
console.log(array2.findIndex((item) => item > 20));

// map, filter
const result2 = array2.map((x) => x * 2);
console.log(result2);

const result3 = array2.filter((item) => item > 20);
console.log(result3);
