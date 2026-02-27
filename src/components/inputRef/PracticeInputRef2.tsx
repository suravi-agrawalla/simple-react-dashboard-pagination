import { useRef } from "react";

export default function PracticeInputRef2() {
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    console.log(count);
    console.log("clicked");
  };
  return (
    <>
      <h1>ths is pratcing input ref for storing value without rerender</h1>
      <button onClick={handleClick}>click me </button>
    </>
  );
}
