import { useLayoutEffect, useRef, useState } from "react";

export default function PracticeUselayoutEffect() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <h1>this is my component</h1>
      <div ref={cardRef}>card 1 </div>
      <div style={{ height }}> card 2</div>
    </>
  );
}
