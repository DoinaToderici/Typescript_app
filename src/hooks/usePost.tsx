import axios from "axios";
import { useEffect, useState } from "react";
import { Post, Posts } from "../types";

export const initialPost = {
  userId: null,
  id: Math.floor(Math.random() * 100),
  title: "",
  content: "",
  likes: 0,
  unlikes: 0,
  comments: [{ description: "" }],
  date: new Date().toLocaleDateString("en-GB"),
  img: "",
};

export const usePost = () => {
  const [post, setPost] = useState<Post>(initialPost);
  const [posts, setPosts] = useState<Posts>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updatePost = (postEditContent: Post) => {
    axios
      .put(`http://localhost:3000/posts/${postEditContent.id}`, postEditContent)
      .then((res) => {
        console.log(res);

        const copyPosts = [...posts];
        const newPosts = copyPosts.map((item) => {
          if (item.id === res.data.id) {
            return postEditContent;
          }

          return item;
        });
        setPosts(newPosts);
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (postDelete: Post) => {
    axios
      .delete(`http://localhost:3000/posts/${postDelete.id}`)
      .then((res) => {
        const copyPosts = [...posts];
        const newPosts = copyPosts.filter((item) => item.id !== postDelete.id);
        setPosts(newPosts);
      })
      .catch((err) => console.log(err));
  };

  const addPostLike = (newLikedPost: Post) => {
    axios
      .put(`http://localhost:3000/posts/${newLikedPost.id}`, newLikedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const addPostUnlike = (newUnlikedPost: Post) => {
    axios
      .put(`http://localhost:3000/posts/${newUnlikedPost.id}`, newUnlikedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    initialPost,
    post,
    setPost,
    posts,
    setPosts,
    addPostLike,
    addPostUnlike,
    updatePost,
    deletePost,
  };
};
