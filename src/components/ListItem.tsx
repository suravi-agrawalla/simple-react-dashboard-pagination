function ListItem() {
  const list = [
    { id: 1, name: "mango", color: "green" },
    { id: 2, name: "strawberry", color: "red" },
    { id: 3, name: "jackFruit", color: "green" },
  ];
  return (
    <>
      <h1>hello</h1>
      <h1>thsi is react compoennt</h1>
      {list.map((ele) => (
        <li key={ele.id}>{ele.name}</li>
      ))}
    </>
  );
}

export default ListItem;
