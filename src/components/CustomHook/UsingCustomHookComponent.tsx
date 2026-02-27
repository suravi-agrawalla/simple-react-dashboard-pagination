import useCounter from "./useCounter";

export default function UsingCustomHookComponent() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <button onClick={increment}>Incremen</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{count}</h1>
    </>
  );
}
