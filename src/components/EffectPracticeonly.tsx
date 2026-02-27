import { useEffect, useState } from "react";

export default function EffectPracticeonly() {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
      <h1>This is use effct practic ecompoent</h1>

      {userData.map((user) => (
        <>
          <li key={user.id}>{user.name}</li>
          <li key={user.id}>{user.username}</li>
          <li key={user.id}>{user.email}</li>
        </>
      ))}
    </>
  );
}
