// 서버로부터 내려올 데이터 타입

export type Board = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type comm = {
  userId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// create (title,body,userId)
// update (id,title,body,userId)
export type BoardUpSert = Omit<Board, "id"> & { id?: number };
