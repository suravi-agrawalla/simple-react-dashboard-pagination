import { useEffect, useState } from "react";

export default function EffectPracticeProject() {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const [user, setUser] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/usersssssss"
        );
        const data = await res.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("something wnet worng");
      }
    };
    fetchUserData();
  }, []);

  const filterUser = user.filter((user) => user.name.includes(search));
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h1>this is my proj</h1>
      <h1>right!</h1>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filterUser.length > 0 ? (
        <ul>
          {filterUser.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </>
  );
}
