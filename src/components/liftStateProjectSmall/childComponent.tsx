export default function ChildComponent({
  text,
  setText,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <h1>this is my child component</h1>
      <input
        type="text"
        value={text}
        placeholder="seachSomething"
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
