import { Button } from "@mui/material";
import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <>
      <h1>use memo</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
      <h1>{calculation}</h1>
    </>
  );
}
