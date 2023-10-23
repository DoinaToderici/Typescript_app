import { createContext } from "react";
import { useUser } from "../hooks/useUser";
import { Outlet } from "react-router-dom";
import Header from "../components/reusable/Header";
import { initialPost, usePost } from "../hooks/usePost";
import { initialUserData } from "../hooks/useUser";
import { AppContext } from "../types";

const initialContextData = {
  user: initialUserData,
  setUser: undefined,
  users: [],
  registrationUser: undefined,
  loginUser: undefined,
  componentToDisplay: undefined,
  setComponentToDisplay: undefined,
  logOut: undefined,
  post: initialPost,
  setPost: undefined,
  posts: [],
  setPosts: undefined,
  addPostLike: undefined,
  addPostUnlike: undefined,
  updatePost: undefined,
  deletePost: undefined,
};

// create context and set default value
export const appContext = createContext<AppContext>(initialContextData);

// create provider context function()
export const AppProvider = () => {
  const {
    user,
    setUser,
    users,
    componentToDisplay,
    setComponentToDisplay,
    registrationUser,
    loginUser,
    logOut,
  } = useUser();

  const {
    post,
    setPost,
    posts,
    setPosts,
    addPostLike,
    addPostUnlike,
    updatePost,
    deletePost,
  } = usePost();

  return (
    <appContext.Provider
      value={{
        user,
        setUser,
        users,
        registrationUser,
        loginUser,
        componentToDisplay,
        setComponentToDisplay,
        logOut,
        post,
        setPost,
        posts,
        setPosts,
        addPostLike,
        addPostUnlike,
        updatePost,
        deletePost,
      }}
    >
      <Header />
      <Outlet />
    </appContext.Provider>
  );
};
