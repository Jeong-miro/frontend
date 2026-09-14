import React, { useEffect, useState } from "react";

export type Book = {
  id: number;
  title: string;
  author: string;
};

const BookJsonFetcher = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const getData = async () => {
    const response = await fetch(`./data/Books.json`);
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    const fetchData = async () => {
      const localData = await getData();
      setBooks(localData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>도서번호</th>
            <th>도서명</th>
            <th>저자명</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookJsonFetcher;
