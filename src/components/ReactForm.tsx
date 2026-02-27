import { Password } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function ReactForm() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, //here it is imp liek the name attribute
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };
    if (form.name == "") {
      newErrors.name = "name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "email is not valid";
    }

    if (form.password.length < 6) {
      newErrors.password = "password should minimum 7 char";
    }
    console.log(form.name);
    console.log(form.password);
    console.log(form.email);
    setError(newErrors);
  };
  return (
    <>
      <h1>this is my Form</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
          margin: "50px auto",
        }}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && <h1>{error.name}</h1>}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {error.email && <h1>{error.email}</h1>}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {error.password && <h1>{error.password}</h1>}
        <button type="submit">sign in</button>
      </form>
    </>
  );
}
