// MessageRole = "user" | "assistant"
export type MessageRole = "user" | "assistant";
// ChatMessageType
// id : 메세지 식별자
// role : 메세지 작성자
// content : 메세지 내용
// createdAt : 메세지 생성 시간

export interface ChatMessageType {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}
