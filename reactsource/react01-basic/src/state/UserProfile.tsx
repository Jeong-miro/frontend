import { useState } from "react";
import Profile from "./Profile";

const UserProfile = () => {
  const users = ["Alice", "Bob", "Clark"];
  const [user, setUser] = useState(users[0]);
  const [status, setStatus] = useState(true);

  console.log("UserProfile Rendered");
  return (
    <>
      <div>
        <h2>User Profile</h2>
        <button onClick={() => setStatus(!status)}>Toggle Status</button>
        <button onClick={() => setUser(users[(users.indexOf(user) + 1) % users.length])}>Switch Status</button>
        <p>{status ? "Active" : "Inactive"} </p>
      </div>
      <Profile name={user} />
    </>
  );
};

export default UserProfile;
