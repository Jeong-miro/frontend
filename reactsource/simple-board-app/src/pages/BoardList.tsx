import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import useBoards from "../hooks/useBoards";

const BoardList = () => {
  // ? 뒤 파라메터 값 가져오기
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;

  const { data, loading } = useBoards(currentPage, size);
  const { total, total_pages } = data;

  // 화면에 보여줄 페이지 개수 제한
  const pageSize = 5;
  const startPage = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, total_pages);
  if (loading) {
    return <p>Loading....</p>;
  }

  const onPageChange = (page: number) => {
    setSearchParams({
      page: String(page),
      size: String(size),
    });
  };

  return (
    <div>
      <div className="mb-8 text-sm text-slate-400">
        Home <span className="mx-2">/</span>
        <span className="text-slate-600">게시판</span>
      </div>

      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">자유게시판</h1>

          <p className="mt-2 text-slate-500">다양한 이야기를 자유롭게 나눠보세요.</p>
        </div>

        <Link
          to="/boards/write"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          ✍️ 글쓰기
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6 flex gap-2">
        <select className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500">
          <option>제목 + 내용</option>
          <option>제목</option>
          <option>작성자</option>
        </select>

        <div className="flex flex-1 overflow-hidden rounded-lg border border-slate-200 bg-white focus-within:border-indigo-500">
          <input type="text" placeholder="검색어를 입력하세요" className="flex-1 px-4 py-3 text-sm outline-none" />

          <button className="px-5 text-sm font-medium text-slate-600 hover:bg-slate-50">검색</button>
        </div>
      </div>

      {/* Count */}
      <div className="mb-3 text-sm text-slate-500">
        전체 <span className="font-semibold text-slate-900">{total}</span>개의 게시글
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="w-20 px-6 py-4 text-center font-medium text-slate-500">번호</th>
              <th className="px-6 py-4 text-left font-medium text-slate-500">제목</th>
              <th className="w-32 px-6 py-4 text-center font-medium text-slate-500">작성자</th>
              <th className="w-32 px-6 py-4 text-center font-medium text-slate-500">작성일</th>
              <th className="w-24 px-6 py-4 text-center font-medium text-slate-500">조회</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.items.map((post) => (
              <tr key={post.id} className="transition hover:bg-slate-50">
                <td className="px-6 py-5 text-center text-slate-400">{post.id}</td>
                <td className="px-6 py-5">
                  <Link
                    to={`/boards/${post.id}?page=${currentPage}&size=${size}`}
                    className="font-medium text-slate-800 hover:text-indigo-600"
                  >
                    {post.title}
                  </Link>
                </td>

                <td className="px-6 py-5 text-center text-slate-500">{post.user_id}</td>

                <td className="px-6 py-5 text-center text-slate-400">{post.created_at}</td>

                <td className="px-6 py-5 text-center text-slate-400">28</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={total_pages}
        onPageChange={onPageChange}
        start={startPage}
        end={endPage}
      />
    </div>
  );
};

export default BoardList;
