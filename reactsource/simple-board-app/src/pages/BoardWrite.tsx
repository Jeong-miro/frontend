import { useEffect } from "react";
import { postBoard } from "../apis/boardApi";
import BoardForm from "../components/BoardForm";
import type { Board, BoardUpSert } from "../Types/board";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const navigate = useNavigate();
  // submit 시 서버 전송
  const onSubmit = async (board: BoardUpSert) => {
    try {
      const result = await postBoard(board);
      console.log(result);

      // 페이지 이동
      navigate("/boards");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Form */}
      <BoardForm onSubmit={onSubmit} />
    </div>
  );
};

export default BoardWrite;
