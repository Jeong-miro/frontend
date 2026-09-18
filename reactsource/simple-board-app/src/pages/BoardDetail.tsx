import { Link, useNavigate, useParams } from "react-router-dom";
import { commentBoard, deleteBoard } from "../apis/boardApi";
import useBoard from "../hooks/useBoard";

const BoardDetail = () => {
  // 주소줄에 있는 id 가져오기
  const { id } = useParams();
  const navigate = useNavigate();
  // 하나 가져와서 화면에 보여주기
  const { comm, board, loading } = useBoard(id);

  const handleRemove = async (id: string | undefined) => {
    if (!id) return;
    try {
      const result = await deleteBoard(id);
      console.log(result);

      // 페이지 이동
      navigate("/boards");
    } catch (error) {
      console.log(error);
    }
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
          <h1 className="text-2xl font-bold">{board?.title}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
            <span className="font-medium text-slate-600">{board?.userId}</span>
            <span>2026.09.17 14:32</span>
            <span>조회 42</span>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px] px-8 py-10 leading-8 text-slate-700">
          <p>{board?.body}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between border-t border-slate-200 px-8 py-5">
          <Link
            to="/boards"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            목록
          </Link>

          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/boards/${id}/edit`)}
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
      <div>
        <ul>
          <li className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">댓글</li>
          {comm?.map((comment) => (
            <li key={comment.id} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="mb-1 text-sm font-bold text-slate-900">{comment.name}</div>
              <div className="mb-3 text-xs text-slate-500">{comment.email}</div>
              <p className="text-sm leading-6 text-slate-700">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoardDetail;
