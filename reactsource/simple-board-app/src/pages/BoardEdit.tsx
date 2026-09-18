import { useNavigate, useParams } from "react-router-dom";
import { putBoard } from "../apis/boardApi";
import BoardForm from "../components/BoardForm";
import useBoard from "../hooks/useBoard";
import type { BoardUpSert } from "../Types/board";

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // 하나 가져와서 화면에 보여주기
  const { board, loading } = useBoard(id);
  const onSubmit = async (board: BoardUpSert) => {
    try {
      if (!id) return;
      const result = await putBoard(id, board);
      console.log(result);

      // 페이지 이동 => 상세조회
      navigate(`/boards/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  if (!board) {
    return <p>게시글을 찾을 수 없습니다.</p>;
  }
  return (
    <div>
      {/* Form */}
      <BoardForm onSubmit={onSubmit} board={board} />
    </div>
  );
};

export default BoardEdit;
