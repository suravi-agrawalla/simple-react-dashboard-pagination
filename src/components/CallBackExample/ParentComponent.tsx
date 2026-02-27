import ChilddComponent from "./ChildComponent";

export default function ParenttComponent() {
  const handleMessage = (msg: string) => {
    console.log("msg is coming from child is", msg);
  };
  return (
    <>
      <h1>This is Parent Component</h1>
      <ChilddComponent onSend={handleMessage} />
    </>
  );
}
