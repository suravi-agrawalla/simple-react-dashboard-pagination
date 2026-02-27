import useFetch from "./Usefetch";

export default function UsingUseFetchForCustomerHook() {
  const { data, loading } = useFetch();

  return (
    <>
      {loading && <h1>loading....</h1>}
      <h1>my compoent</h1>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}
