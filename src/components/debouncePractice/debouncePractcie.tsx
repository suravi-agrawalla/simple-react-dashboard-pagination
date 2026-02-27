import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export function DebouncePractice() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState<User[]>([]);
  const [filterData, setFilterData] = useState<User[]>([]);

  // Fetch only once
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUserData(data);
    };

    fetchUser();
  }, []);

  // Debounce filtering
  useEffect(() => {
    const timer = setTimeout(() => {
      const filterUser = userData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilterData(filterUser);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, userData]);

  return (
    <>
      <h1>Debounce Search</h1>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filterData.map((user) => (
        <Box key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </Box>
      ))}
    </>
  );
}
