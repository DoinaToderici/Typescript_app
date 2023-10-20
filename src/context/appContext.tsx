import { createContext } from "react";
import { useUser } from "../hooks/useUser";
import { Outlet } from "react-router-dom";
import Header from "../components/reusable/Header";
import { usePost } from "../hooks/usePost";

const emptyUserData = {
  id: Math.floor(Math.random() * 100),
  name: "",
  email: "",
  password: "",
  posts: 0,
};

// create context and set default value
export const appContext = createContext<any>({
  user: emptyUserData,
  setUser: undefined,
});

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

  const { emptyPost, post, setPost, posts, setPosts } = usePost();

  return (
    <appContext.Provider
      value={{
        emptyUserData,
        user,
        setUser,
        users,
        registrationUser,
        loginUser,
        componentToDisplay,
        setComponentToDisplay,
        logOut,

        emptyPost,
        post,
        setPost,
        posts,
        setPosts,
      }}
    >
      <Header />
      <Outlet />
    </appContext.Provider>
  );
};
