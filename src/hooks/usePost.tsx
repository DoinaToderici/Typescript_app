import axios from "axios";
import { useEffect, useState } from "react";
const emptyPost = {
  userId: null,
  id: Math.floor(Math.random() * 100),
  title: "",
  content: "",
  likes: 0,
  unlikes: 0,
  coments: [{ coment: "" }],
  date: new Date().toLocaleDateString("en-GB"),
  img: "",
};

export type PostType = {
  post: {
    userId: number;
    id: number;
    title: string;
    content: string;
    likes: number;
    unlikes: number;
    coments: [{ coment: string }];
    date: string;
    img: string;
  };
};

export const usePost = () => {
  const [post, setPost] = useState<PostType["post"]>(emptyPost);
  const [posts, setPosts] = useState<PostType["post"][]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return { emptyPost, post, setPost, posts, setPosts };
};
