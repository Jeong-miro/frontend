import React, { useEffect, useState } from "react";
type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

type UserResponse = {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};

const RandomUser = ({ onProfile }: { onProfile: (user: User) => void }) => {
  const [result, setResult] = useState<User[]>([]);

  const getData = async () => {
    const response = await fetch(`https://api.randomuser.me/?results=10`);
    const data: UserResponse = await response.json();
    return data.results;
  };
  useEffect(() => {
    console.log("3. UseEffect 실행");
    // 렌더링 할 때 myData.json 가지고 오기

    const fetchData = async () => {
      const localData = await getData();
      setResult(localData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="border border-gray-100 p-2">사진</th>
            <th className="border border-gray-100">로그인</th>
            <th className="border border-gray-100">이름</th>
            <th className="border border-gray-100">국가</th>
            <th className="border border-gray-100">이메일</th>
          </tr>
        </thead>
        <tbody>
          {result?.map((user) => (
            <tr>
              <td className="border border-gray-100">
                {/* picture tumbnail */}
                <img src={user.picture.thumbnail} alt=""></img>
              </td>
              <td className="border border-gray-100">
                {/* username */}
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    // 부모가 넘겨준 onProfile() 호출
                    onProfile(user);
                  }}
                >
                  {user.login.username}
                </a>
              </td>
              <td className="border border-gray-100">
                {/* name 3개 전부 */}
                {user.name.title}
                {user.name.first}
                {user.name.last}
              </td>
              <td className="border border-gray-100">
                {/* nat */}
                {user.nat}
              </td>
              <td className="border border-gray-100">
                {/* email */}
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RandomUser;
