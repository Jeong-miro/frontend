// fetch() : 서버와 네트워크 요청을 보낼때 사용하는 함수
//           기본 GET

// setTimeout(()=>{}, 3000);

// 비동기식으로 서버에서 데이터 가져오기
// 1. fetch()
// 2. axios() : 설치 필요

// fetch("데이터를 가져올 서버 주소")
//   .then("데이터 도착 여부 확인 / 데이터를 적절한 타입으로 변환")
//   .then("변환된 데이터를 화면 출력...")
//   .catch("오류 발생 처리 구문 작성")
//   .finally("무조건 실행")
fetch();
// 비동기식
// 콜백함수
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// 비동기식 => 동기식 코드처럼 읽기 쉽게 작성
async function load() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
load();

const load2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};

load2();
