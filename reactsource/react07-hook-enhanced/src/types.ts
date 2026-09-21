export type Message = {
  text: string;
  sending: boolean;
};

export const initMessage: Message = {
  text: "기본 메세지 입니다",
  sending: false,
};

export type ThreadProps = {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
};
