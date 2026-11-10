import { openai } from "./openai";
// interface sendMessageParams {
//   message: string;
//   previousResponseId?: string | null;
// }
// openai 서버 요청 (메세지 전체적으로 한번에 처리)
// export const sendMessage = async ({ message, previousResponseId }: sendMessageParams) => {
//   const response = await openai.responses.create({
//     model: import.meta.env.VITE_OPENAI_MODEL || "gpt-6-luna",
//     // reasoning: { effort: "low" },
//     instructions: `당신은 친절하고 정확한 AI 어시스턴트 입니다.
//     사용자의 질문에 한국어로 답변해주세요.
//     필요한 경우 예시를 들어 이해하기 쉽게 설명해주세요.
//     `,
//     input: message,
//     // previousResponseId 가 존재하는 경우만 추가
//     ...(previousResponseId && { previous_response_id: previousResponseId }),
//   });

//   return {
//     id: response.id,
//     text: response.output_text,
//   };
// };

// stream 방식
interface SendMessageParams {
  message: string;
  previousResponseId?: string | null;
  instructions?: string;
  onDelta: (text: string) => void;
}
export const sendMessage = async ({
  message,
  previousResponseId,
  instructions,
  onDelta,
}: SendMessageParams): Promise<{ id: string; text: string }> => {
  const stream = await openai.responses.create({
    model: import.meta.env.VITE_OPENAI_MODEL || "gpt-6-luna",
    // reasoning: { effort: "low" },
    instructions: instructions ?? `당신은 친절하고 정확한 AI 어시스턴트 입니다.
    사용자의 질문에 한국어로 답변해주세요.
    필요한 경우 예시를 들어 이해하기 쉽게 설명해주세요.
    `,
    input: message,
    // previousResponseId 가 존재하는 경우만 추가
    ...(previousResponseId && { previous_response_id: previousResponseId }),
    stream: true,
  });

  let responseId: string | null = null;
  let text = "";

  // 서버에서 전달되는 이벤트를 순차적으로 처리
  for await (const event of stream) {
    if (event.type === "response.output_text.delta") {
      text += event.delta;
      onDelta(event.delta);
    }
    // 응답 생성이 완료된 경우
    if (event.type === "response.completed") {
      responseId = event.response.id;
    }

    // 스트리밍 도중 오류 이벤트가 발생한 경우
    if (event.type === "error") {
      throw new Error(event.message);
    }
    if (event.type === "response.failed") {
      throw new Error(event.response.error?.message ?? "응답 생성에 실패했습니다.");
    }
    if (event.type === "response.incomplete") {
      const reason = event.response.incomplete_details?.reason;
      throw new Error(reason ? `응답이 완료되지 않았습니다: ${reason}` : "응답이 완료되지 않았습니다.");
    }
  }
  if (!responseId) {
    throw new Error("응답이 정상적으로 완료되지 않았습니다.");
  }

  return {
    id: responseId,
    text,
  };
};
