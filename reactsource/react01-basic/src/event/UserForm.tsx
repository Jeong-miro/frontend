import { useState } from "react";

const UserForm = () => {
  const roles = ["user", "admin", "guest"];
  // form 안 내용들을 한꺼번에 관리
  const [form, setForm] = useState({
    username: "",
    isSubscr: false,
    role: "user",
  });

  const { username, isSubscr, role } = form;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="border-2 py-4 border-gray-400 rounded-sm">
      <form action="">
        {/* username 에서 입력한 값 보여주기 Name : 홍길동 (Subscribed)*/}
        <div>
          Name : {username} {isSubscr && "(Subscribed)"}
        </div>
        {/* option 에서 선택한 값 보여주기 */}
        <div>Role : {role}</div>
        <div>
          <label htmlFor="">이름 </label>
          <input
            type="text"
            name="username"
            className="border border-gray-400 px-3"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">구독 </label>
          <input type="checkbox" name="isSubscr" id="" checked={isSubscr} onChange={handleChange} />
        </div>
        {/* roles 의 값을 option 으로 보여주기 */}
        <select name="role" className="mx-3" onChange={handleChange}>
          {roles.map((role, idx) => (
            <option key={idx} value={role}>
              {role}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default UserForm;
