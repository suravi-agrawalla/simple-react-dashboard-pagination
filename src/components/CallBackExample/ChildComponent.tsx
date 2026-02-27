import { Button } from "@mui/material";

export default function ChilddComponent({
  onSend,
}: {
  onSend: (msg: string) => void;
}) {
  return (
    <>
      <h1>This is the child component</h1>
      <Button onClick={() => onSend("hi")}> me </Button>
    </>
  );
}
