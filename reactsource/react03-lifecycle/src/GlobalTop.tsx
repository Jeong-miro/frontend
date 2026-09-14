import { useEffect, useState } from "react";
import type { Usertype } from "./LocalJsonFetcher";

const GlobalTop = ({ myLinkClick }: { myLinkClick: (num: number) => void }) => {
  console.log("1.컴포넌트 실행");

  const [myList, setMyList] = useState<Usertype[]>([]);
  // myData.json 가져오기

  const getData = async () => {
    const response = await fetch(`./data/myData.json`);
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    console.log("3. UseEffect 실행");
    // 렌더링 할 때 myData.json 가지고 오기

    const fetchData = async () => {
      const localData = await getData();
      setMyList(localData);
    };
    fetchData();
  }, []);
  console.log("2 return 실행(rendering)");

  return (
    <div>
      <ul>
        {myList.map((data) => (
          <li key={data.id}>
            {/* 이름 클릭시 해당 user 상세정보 가져오기 */}
            <a
              href={data.id}
              data-id={data.num}
              onClick={(e) => {
                e.preventDefault();
                // a 태그에 담아놓은 data- 값 이용 시
                myLinkClick(Number(e.currentTarget.dataset.id));
              }}
            >
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalTop;
