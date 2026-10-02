import React from "react";
import type { CommentResponse } from "../Types/board";
export type ReplyProps = {
  comments: CommentResponse[];
};

const ReplyComp = ({ comments }: ReplyProps) => {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white">
      {/* 댓글 헤더 */}
      <div className="border-b border-slate-200 px-8 py-5">
        <h2 className="text-lg font-bold">
          댓글
          <span className="ml-1 text-indigo-600">{comments.length ?? 0}</span>
        </h2>
      </div>

      {/* 댓글 목록 */}
      <div>
        {/* 댓글개수 없을 떄 */}
        {comments.length == 0 ? (
          <div className="px-8 py-12 text-center text-sm text-slate-400">등록된 댓글이 없습니다.</div>
        ) : (
          comments.map((comment: CommentResponse) => (
            <div className="border-b border-slate-100 px-8 py-6 last:border-b-0">
              {/* 댓글 상단 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
                    {/* 댓글작성자 첫번째 글자 보여주기 */}
                    {comment.user.name.charAt(0)}
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-800">{comment.user.name}</div>

                    <div className="mt-0.5 text-xs text-slate-400">{comment.created_at}</div>
                  </div>
                </div>

                {/* 댓글 수정/삭제 버튼 */}

                <div className="flex items-center gap-3 text-xs">
                  <button className="text-slate-400 hover:text-indigo-600">수정</button>

                  <span className="text-slate-200">|</span>

                  <button className="text-slate-400 hover:text-red-500">삭제</button>
                </div>
              </div>

              {/* 댓글 내용 */}
              <div className="mt-4">
                <textarea className="min-h-25 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />

                <div className="mt-3 flex justify-end gap-2">
                  <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
                    취소
                  </button>

                  <button className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40">
                    저장
                  </button>
                </div>
              </div>

              <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-slate-700">{/* 댓글 내용 */}</p>
            </div>
          ))
        )}
        {/* 댓글개수 존재할 때 */}
      </div>
      {/* 댓글 작성 */}
      <div className="border-t border-slate-200 bg-slate-50 px-8 py-6">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">댓글 작성</h3>
        <div className="flex gap-3">
          <textarea
            placeholder="댓글을 입력해주세요."
            className="min-h-24 flex-1 resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
          <button className="self-end rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40">
            댓글 등록
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReplyComp;
