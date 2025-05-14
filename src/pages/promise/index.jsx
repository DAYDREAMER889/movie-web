import { useState } from "react";
const Promise = () => {
  const [posts, setPosts] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("promise duuslaa")); // ямарч төлөвтэй үед орно

  return (
    <div>
      ene unshina
      {posts.map((post) => {
        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Promise;
