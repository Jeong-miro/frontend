// 서버로부터 내려올 데이터 타입

export type BoardCreate = {
  user_id: number;
  title: string;
  contents: string;
};

export type BoardUpdate = {
  title: string;
  contents: string;
};

export type UserResponse = {
  user_id: number;
  name: string;
};

export type CommentResponse = {
  comment_id: number;
  body: string;
  user_id: number;
  user: UserResponse;
  board_id: number;
  created_at: string;
};

export type CommentCreate = {
  body: string;
  user_id: number;
  board_id: number;
};

export type CommentUpdate = {
  body: string;
};

export type BoardResponse = {
  id: number;
  title: string;
  contents: string;
  user_id: number;
  created_at: string;
  user: UserResponse;
  comments: CommentResponse[];
};

export type BoardPageResponse = {
  items: BoardResponse[];
  total: number;
  page: number;
  size: number;
  total_pages: number;
  criteria: string;
  keyword: string;
};

export type Board = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type BoardComment = Board & { comments: Comment[] };

// create (title,body,userId)
// update (id,title,body,userId)
export type BoardUpSert = Omit<Board, "id"> & { id?: number };
