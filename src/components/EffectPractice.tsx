import { Button } from "@mui/material";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function EffectPractice() {
  const [postData, setPostsData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPostsData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <h1>...loading</h1>}
      <Button onClick={handleClick}>Show the all post data</Button>
      {!loading && postData.map((ele) => <li key={ele.id}>{ele.title}</li>)}
    </>
  );
}

// export function EffectPractice() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const fetchPost = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();
//       setPosts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchPost();

//   //   useEffect(() => {
//   //     fetchPost();
//   //   }, []);
//   return (
//     <>
//       <h1>hello</h1>
//       <h1>no</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <strong>{post.title}</strong>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
