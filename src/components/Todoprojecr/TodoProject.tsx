import { Box, Button, Checkbox, Chip } from "@mui/material";
import { useEffect, useState } from "react";

interface taskType {
  userid: number;
  id: number;
  title: string;
}

export default function TodoProject() {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState<taskType[]>([]);

  useEffect(() => {
    const usertask = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTask(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    usertask();
  }, []);

  const handleAll=()=>{
    
  }
  return (
    <>
      <h1>My TODO App</h1>
      {loading && <h1>loading</h1>}
      <div>
        <Button variant="contained" sx={{ margin: "2rem" }} onClick={handleAll}>
          ALL
        </Button>
        <Button variant="contained" sx={{ margin: "2rem" }}>
          Completed
        </Button>
        <Button variant="contained" sx={{ margin: "2rem" }}>
          Pending
        </Button>
      </div>

      <div>
        {task.map((task) => (
          <Box display="flex" alignItems="center">
            <Checkbox />
            <h2 style={{ margin: 0 }}>{task.title}</h2>
            <Button variant="contained" sx={{ marginLeft: "2rem" }}>
              Delete
            </Button>
          </Box>
        ))}
      </div>
    </>
  );
}
