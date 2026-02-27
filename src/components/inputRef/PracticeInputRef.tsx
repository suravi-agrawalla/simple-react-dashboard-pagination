import { Button } from "@mui/material";
import { useRef } from "react";

export default function PracticeInputRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus();
    console.log("sexy");
  };
  return (
    <>
      <h2>thsi is my use ref pratcie compoent</h2>
      <input type="text" placeholder="type something" ref={inputRef} />
      <Button onClick={handleClick}>click me</Button>
    </>
  );
}

//We use useRef to persist values across renders without causing a re-render.
// It is commonly used to directly access DOM elements or store mutable values like timers or previous state.
