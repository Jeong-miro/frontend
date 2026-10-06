import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { deleteBoard } from "../apis/boardApi";
import useBoard from "../hooks/useBoard";
import ReplyComp from "../components/ReplyComp";
import { deleteComment, postComment, putComment } from "../apis/commentApi";
import type { CommentCreate } from "../Types/board";

const BoardDetail = () => {
  // 주소줄에 있는 id 가져오기
  const { id } = useParams();
  const navigate = useNavigate();
  const { board, loading, refresh } = useBoard(id);

  console.log("board", board);
  // 주소줄에 ? 뒤의 값 가져오기
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;

  const handleRemove = async (id: string | undefined) => {
    if (!id) return;
    try {
      const result = await deleteBoard(id);
      console.log(result);

      // 페이지 이동
      navigate(`/boards?page=${currentPage}&size=${size}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 삭제
  const handleCommentRemove = async (commentId: number) => {
    if (!confirm("댓글을 삭제하시겠습니까?")) {
      return;
    }

    try {
      const result = await deleteComment(commentId);
      console.log(result);

      // 현재 게시물 다시 읽어오기
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 등록
  const handleCommentSubmit = async (commentContent: string) => {
    // id 가 undefind 라면 (parseInt)
    if (!id) {
      return;
    }

    try {
      const comment: CommentCreate = {
        user_id: 1,
        board_id: parseInt(id),
        body: commentContent,
      };

      const result = await postComment(comment);
      console.log(result);
      refresh();
    } catch (error) {}
  };

  // 댓글 수정
  const handleCommentEdit = async (commentId: number, editContent: string) => {
    try {
      const result = await putComment(commentId, { body: editContent });
      console.log(result);
      refresh();
    } catch (error) {}
  };

  if (loading) {
    return <p>Loading....</p>;
  }
  // to={`/boards/${post.id}`}
  return (
    <div>
      <div className="mb-8 text-sm text-slate-400">
        Home <span className="mx-2">/</span>
        게시판 <span className="mx-2">/</span>
        <span className="text-slate-600">게시글</span>
      </div>

      <article className="rounded-xl border border-slate-200 bg-white">
        {/* Header */}
        <div className="border-b border-slate-200  px-8 py-7">
          <h1 className="text-2xl font-bold">{board.title}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
            <span className="font-medium text-slate-600">{board.user.name}</span>
            <span>2026.09.17 14:32</span>
            <span>조회 42</span>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-100 px-8 py-10 leading-8 text-slate-700">
          <p>{board.contents}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between border-t border-slate-200 px-8 py-5">
          <Link
            to={`/boards?page=${currentPage}&size=${size}`}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            목록
          </Link>

          <div className="flex gap-2">
            <button
              onClick={() =>
                navigate({
                  pathname: `/boards/${id}/edit`,
                  search: `?page=${currentPage}&size=${size}`,
                })
              }
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              수정
            </button>

            <button
              onClick={() => {
                if (confirm("정말로 삭제하시겠습니까?")) {
                  handleRemove(id);
                }
              }}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              삭제
            </button>
          </div>
        </div>
      </article>
      {/* 댓글 보여주기 posts/${id}/comments*/}
      <ReplyComp
        comments={board.comments}
        handleCommentRemove={handleCommentRemove}
        handleCommentSubmit={handleCommentSubmit}
        handleCommentEdit={handleCommentEdit}
      />
    </div>
  );
};

export default BoardDetail;
