import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserType {
  user: {
    id: number;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    posts: number;
  };
  setUser: Dispatch<SetStateAction<UserType>>;
  userConnected: {
    id: number;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    posts: number;
  };
}

const emptyUserData = {
  id: Math.floor(Math.random() * 100),
  name: "",
  email: "",
  password: "",
  posts: 0,
};

export const useUser = () => {
  const [user, setUser] = useState<UserType["user"]>(emptyUserData);
  const [users, setUsers] = useState<UserType["user"][]>([]);
  const [componentToDisplay, setComponentToDisplay] = useState<String>("login");
  const navigate = useNavigate();

  // get all users from DB
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // get user from localStorage
  useEffect(() => {
    const connectedUser = localStorage.getItem("user");
    if (connectedUser !== null) {
      const data = JSON.parse(connectedUser);
      setUser(data);
    } else {
      console.log("Not user in localStorage");
    }
  }, []);

  const registrationUser = (data: any) => {
    axios
      .post("http://localhost:3000/users", data)
      .then(function () {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const loginUser = (userToConnect: any) => {
    const loggedUser = users.find((userDb) => {
      return userDb.email === userToConnect.email;
    });

    if (loggedUser) {
      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      navigate("/dashboard");
    } else {
      console.log("This user is not registered in DB");
    }
  };

  const logOut = () => {
    localStorage.clear();
    setUser(emptyUserData);
    setComponentToDisplay("login");
    navigate("/");
  };

  return {
    user,
    setUser,
    users,
    componentToDisplay,
    setComponentToDisplay,
    registrationUser,
    loginUser,
    logOut,
  };
};
