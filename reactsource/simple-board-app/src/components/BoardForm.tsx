import { useState } from "react";
import type { BoardUpSert } from "../Types/board";
import { useNavigate } from "react-router-dom";

const BoardForm = ({ onSubmit, board }: { onSubmit: (board: BoardUpSert) => void; board?: BoardUpSert }) => {
  const navigate = useNavigate();
  // board 내용이 있는 경우 (edit) / 없는 경우 - 새글 작성
  const [form, setform] = useState(
    board ?? {
      title: "",
      body: "",
      userId: 1,
    },
  );
  const { title, body } = form;

  const handleCange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="mb-8">
        {!board ? (
          <>
            <h1 className="text-3xl font-bold">게시글 작성</h1>
            <p className="mt-2 text-slate-500">새로운 게시글을 작성해주세요.</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">게시글 수정</h1>
            <p className="mt-2 text-slate-500">게시글을 수정해주세요.</p>
          </>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(form);
        }}
        className="rounded-xl border border-slate-200 bg-white p-8"
      >
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-semibold">제목</label>

          <input
            onChange={handleCange}
            value={title}
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold">내용</label>

          <textarea
            onChange={handleCange}
            value={body}
            name="body"
            rows={5}
            placeholder="내용을 입력하세요"
            className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-2">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium hover:bg-slate-50"
          >
            취소
          </button>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            {!board ? "작성" : "수정"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardForm;
