import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("OPENAI API KEY가 설정되지 않았습니다.");
}

export const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true, //OpenAI SDK는 기본적으로 브라우저에서의 사용 차단
});
