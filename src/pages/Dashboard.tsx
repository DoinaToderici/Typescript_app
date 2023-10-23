import { useContext, useState } from "react";
import { appContext } from "../context/appContext";
import { isEmpty } from "../helpers";
import { SlLike, SlDislike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Post } from "../types";

export default function Dashboard() {
  const {
    post,
    posts,
    setPosts,
    user,
    addPostLike,
    addPostUnlike,
    updatePost,
  } = useContext(appContext);

  const [postEditContent, setPostEditContent] = useState<Post>(post);

  const handleEditChange = (e: any) => {
    const newcontentPost = { ...postEditContent, content: e.target.value };
    setPostEditContent(newcontentPost);
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    if (updatePost) {
      updatePost(postEditContent);
    }
    setPostEditContent({});
  };

  const handlLike = (post: Post) => {
    const newLikedPost = { ...post, likes: post.likes + 1 };
    const newPosts = posts.map((item: Post) => {
      if (item.id === post.id) {
        if (addPostLike) {
          addPostLike(newLikedPost);
        }

        return newLikedPost;
      }
      return item;
    });
    if (setPosts) {
      setPosts(newPosts);
    }
  };

  const handlUnlike = (post: Post) => {
    const newUnlikedPost = { ...post, unlikes: post.unlikes + 1 };
    const newPosts = posts.map((item: Post) => {
      if (item.id === post.id) {
        if (addPostUnlike) {
          addPostUnlike(newUnlikedPost);
        }
        return newUnlikedPost;
      }
      return item;
    });
    if (setPosts) {
      setPosts(newPosts);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-5xl mb-10">All posts</h1>
      <div className="posts-container">
        {!isEmpty(posts) &&
          posts.map((post: Post) => {
            return (
              <div
                className="post-card mb-20 p-10 grid grid-cols-3 gap-10 flex items-start shadow-lg shadow-lg"
                key={post.id}
              >
                <div className="post-content col-span-2">
                  {postEditContent !== undefined &&
                  postEditContent.id === post.id ? (
                    <form onSubmit={(e: any) => handleEditSubmit(e)}>
                      <textarea
                        // variant="outlined"
                        autoFocus={true}
                        defaultValue={post.content}
                        name="toModifContent"
                        onChange={(e: any) => handleEditChange(e)}
                        className="mt-1 px-3 py-2 h-40 bg-white border shadow-sm border-lime-300 placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      ></textarea>
                      <input
                        type="submit"
                        value="Valider modification"
                        className="bg-lime-600 hover:bg-lime-300 text-white w-30 mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 bg"
                      />
                    </form>
                  ) : (
                    <div>
                      <h2 className="text-3xl mb-5 capitalize">{post.title}</h2>
                      <p className="mb-4">{post.content}</p>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <div className="date-user text-md text-gray-500">
                      <span className="text-sm">{post.date}</span> | By{" "}
                      <span>{post.userId}</span>
                    </div>
                    <div className="appreciations flex text-gray-600/75">
                      {user.email !== "" && (
                        <>
                          <CiEdit
                            className="cursor-ponter mr-2 text-xl cursor-pointer"
                            onClick={() => setPostEditContent(post)}
                          />
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
