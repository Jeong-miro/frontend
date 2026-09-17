import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addComment, clearComment, deleteComment } from "./CommentsSlice";

const CommentsApp = () => {
  //상태변수 가져오기
  const comments = useAppSelector((state) => state.myComment.comments);
  const dispath = useAppDispatch();

  const [contents, setContents] = useState("");

  return (
    <div className="flex flex-col mx-6">
      <h2 className="text-3xl mt-3">Comments Redux 적용</h2>
      <ul className="border-b-2 my-2 p-2">
        {comments.map((comment) => (
          <li key={comment.id}>
            <span>{comment.contents}</span>
            <button className="bg-red-400 p-2 mx-1 text-white" onClick={() => dispath(deleteComment(comment.id))}>
              댓글삭제
            </button>
          </li>
        ))}
      </ul>
      <textarea
        name="contents"
        rows={3}
        className="border p-4"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      ></textarea>
      <button
        className="bg-orange-400 p-2 mx-1"
        onClick={() => {
          dispath(addComment(contents));
          setContents("");
        }}
      >
        댓글추가
      </button>
      <button className="bg-gray-400 p-2 mx-1" onClick={() => dispath(clearComment())}>
        전체삭제
      </button>
    </div>
  );
};

export default CommentsApp;
