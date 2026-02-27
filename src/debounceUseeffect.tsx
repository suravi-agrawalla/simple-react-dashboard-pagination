import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
  email: string;
}
export default function DebounceUseStateEffect() {
  const [userData, setUserData] = useState<user[]>([]);
  const [filterData, setFilterData] = useState<user[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
        setFilterData(data);
        setLoading(false);
      } catch (error) {
        setError("Something went wrong");
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = userData.filter((user) => user.name.includes(search));
      setFilterData(filter);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, userData]); //here mandatory to add userdata as dependancy array cause we are using it 

  return (
    <>
      <h1>Learning debouncing effect</h1>
      {loading && <h1>loading...........</h1>}
      {error && <h1>{error}</h1>}
      <input
        type="text"
        placeholder="search here...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterData.map((user) => (
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </Box>
      ))}
    </>
  );
}
