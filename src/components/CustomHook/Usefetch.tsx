import { useEffect, useState } from "react";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export default function useFetch() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setloading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await res.json();
  //       setData(data);
  //       setloading(false);
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      const dataFetch = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setData(data);
        setloading(false);
      };
      dataFetch();
    }, 2000);
  }, []);
  return { data, loading };
}
