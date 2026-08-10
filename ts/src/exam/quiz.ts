// 1. 타입(인터페이스) 정의
// Question : question 문자열, choices [], answer
interface Question {
  question: string;
  choices: [];
  answer: number;
}
// type 정의
// GameState : playing or finished
type GameState = "playing" | "finished";
// 2. 문제 데이터 가져오기
// json fetch()
async function getData() {
  const response = await fetch("question.json");
  const data = await response.json();
  console.log(data);
}
getData();
// 3. 게임상태 변수
// currentQuestionIndex : number(초기값 0)
const currentQuestionIndex = (num: number = 0) => {};
// score: 위와 동일
const score = (num: number = 0) => {};
// selectedAnswer : 숫자 or null (초기값 null)
const selectedAnswer = (num: number | null = null) => {};
// gameState : GameState (초기값 playing)
let gameState: GameState = "playing";

// 4. dom 요소 가져오기
// id         as
let ids = document.querySelector("#id");
