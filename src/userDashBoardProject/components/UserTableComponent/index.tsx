import {
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
interface user {
  name: string;
  id: number;
  website: string;
  email: string;
  phone: number;
}
export default function UserTableComponent() {
  const [userData, setUserData] = useState<user[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState<user[]>([]);
  const [page, setPage] = useState(1);
  const itemPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUserData(data);
        setFilterData(data);
        setLoading(false);
      } catch (error) {
        console.log(error, "something went wronng");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = userData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filter);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, userData]);
  const startIndex = (page - 1) * itemPerPage;
  const lastIndex = page * itemPerPage;

  const paginatedData = filterData.slice(startIndex, lastIndex);

  return (
    <>
      {loading ? (
        <h1>loading.............</h1>
      ) : (
        <>
          <TextField
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Box sx={{ padding: 4 }}>
            <Paper elevation={3} sx={{ borderRadius: 3 }}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h5" fontWeight={600}>
                  User Dashboard
                </Typography>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>NAME</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>EMAIL</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>PHONE</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>WEBSITE</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {paginatedData.map((user, index) => (
                      <TableRow
                        key={user.id}
                        hover
                        sx={{
                          backgroundColor:
                            index % 2 === 0 ? "#fafafa" : "white",
                        }}
                      >
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.website}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box display="flex" justifyContent="center" mt={3} mb={2}>
                <Pagination
                  count={Math.ceil(filterData.length / itemPerPage)}
                  page={page}
                  onChange={(event, value) => setPage(value)}
                  color="primary"
                />
              </Box>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
