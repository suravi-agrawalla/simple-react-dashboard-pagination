import { useState } from "react";
import ChildComponent from "./childComponent";

export default function parentComponent() {
  const [text, setText] = useState("");
  console.log(text, "ssssss");
  return (
    <>
      <h1>this is my parent component</h1>
      <ChildComponent text={text} setText={setText} />
    </>
  );
}
