import React, { useState } from "react";
import WriteForm from "./WriteForm";

export type Form = {
  gubun: string;
  title: string;
};

const MyForm = () => {
  // state 관리
  const [form, setForm] = useState<Form>({
    gubun: "",
    title: "",
  });

  // // 부모가 자식의 폼 submit 처리
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // form 의 모든 데이터 가져오기
  //   const formData = new FormData(e.currentTarget);
  //   const gubun = formData.get("gubun");
  //   const title = formData.get("title");

  //   // gubun, title 값 확인
  //   if (gubun && title) {
  //     console.log("gubun : ", gubun);
  //     console.log("title : ", title);
  //   } else {
  //     alert("모든 값을 채워주세요");
  //   }
  // };
  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { gubun, title } = form;

    if (gubun && title) {
      console.log("gubun : ", gubun);
      console.log("title : ", title);
    } else {
      alert("모든 값을 채워주세요");
    }
  };
  return (
    <div>
      <WriteForm onSubmit={onSubmit} form={form} setForm={setForm} />
    </div>
  );
};

export default MyForm;
