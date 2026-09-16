// state 값의 변경을 담당하는 함수 생성
// 입금 deposit, 출금 withdraw

export type BankActionType = "DEP" | "WIT";
export type BankAction = {
  type: BankActionType;
  payload: { balance: number };
};
export const initState = {
  balance: 0,
};
export function bankReducer(state: typeof initState, action: BankAction) {
  const { balance } = action.payload;
  switch (action.type) {
    case "DEP":
      return {
        ...state,
        balance: state.balance + balance,
      };
    case "WIT":
      return {
        ...state,
        balance: state.balance - balance,
      };

    default:
      //return state;
      throw new Error("금액 확인");
  }
}
