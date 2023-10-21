import { useContext, useState } from "react";
import { appContext } from "../../context/appContext";
import { isEmpty } from "../../helpers";
import { PostType } from "../../hooks/usePost";
import { SlLike, SlDislike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Dashboard() {
  const { posts, setPosts, user, addPostLike, addPostUnlike } =
    useContext(appContext);

  const handlLike = (post: any) => {
    const newLikedPost = { ...post, likes: post.likes + 1 };
    const newPosts = posts.map((item: any) => {
      if (item.id === post.id) {
        addPostLike(newLikedPost);
        return newLikedPost;
      }
      return item;
    });
    setPosts(newPosts);
  };

  const handlUnlike = (post: any) => {
    const newUnlikedPost = { ...post, unlikes: post.unlikes + 1 };
    const newPosts = posts.map((item: any) => {
      if (item.id === post.id) {
        addPostUnlike(newUnlikedPost);
        return newUnlikedPost;
      }
      return item;
    });
    setPosts(newPosts);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-5xl mb-10">All posts</h1>
      <div className="posts-container">
        {!isEmpty(posts) &&
          posts.map((post: PostType["post"]) => {
            return (
              <div
                className="post-card mb-20 p-10 grid grid-cols-3 gap-10 flex items-start shadow-lg shadow-lg"
                key={post.id}
              >
                <div className="post-content col-span-2">
                  <h2 className="text-3xl mb-5 capitalize">{post.title}</h2>
                  <p className="mb-4">{post.content}</p>
                  <div className="flex justify-between">
                    <div className="date-user text-md text-gray-500">
                      <span className="text-sm">{post.date}</span> | By{" "}
                      <span>{post.userId}</span>
                    </div>
                    <div className="appreciations flex text-gray-600/75">
                      {user.email !== "" && (
                        <>
                          <CiEdit className="cursor-ponter mr-2 text-xl cursor-pointer" />
                          <MdOutlineDeleteOutline className="cursor-ponter mr-2 text-xl cursor-pointer" />
                        </>
                      )}
                      <span className="flex items-center">
                        <SlLike
                          className="mr-2 text-md font-extrabold cursor-pointer"
                          onClick={() => handlLike(post)}
                        />
                        {post.likes > 0 && (
                          <span className="mr-4">{post.likes}</span>
                        )}
                      </span>
                      <span className="flex items-center text-gray-600/75">
                        <SlDislike
                          className="mr-2 text-md font-extrabold cursor-pointer"
                          onClick={() => handlUnlike(post)}
                        />{" "}
                        {post.unlikes > 0 && (
                          <span className="mr-4">{post.unlikes}</span>
                        )}
                      </span>
                      <span>
                        <AiOutlineComment className="text-xl  text-gray-500 cursor-pointer" />{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post-img col-span-1">
                  <img
                    src="https://picsum.photos/700/500"
                    alt="Img"
                    className="mx-auto"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
