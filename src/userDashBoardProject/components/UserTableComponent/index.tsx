import {
  Box,
  Button,
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
import { useTheme } from "../../../context/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/LightMode";

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
  const { dark, toggleTheme } = useTheme();

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
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button
              variant="contained"
              onClick={toggleTheme}
              startIcon={dark ? <LightModeIcon /> : <DarkModeIcon />}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                backgroundColor: dark ? "#fbc02d" : "#212121",
                color: dark ? "black" : "white",
                "&:hover": {
                  backgroundColor: dark ? "#f9a825" : "#000000",
                },
              }}
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </Button>
          </Box>
          <TextField
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Box
            sx={{
              padding: 4,
              backgroundColor: dark ? "#121212" : "#ffffff",
              minHeight: "100vh",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                borderRadius: 3,
                backgroundColor: dark ? "#1e1e1e" : "white",
                color: dark ? "white" : "black",
              }}
            >
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
