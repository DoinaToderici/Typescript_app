import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface UserType {
  user: {
    id: number;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    tasks: number;
  };
  setUser: Dispatch<SetStateAction<UserType>>;
  userConnected: {
    id: number;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    tasks: number;
  };
}

const emptyUserData = {
  id: Math.floor(Math.random() * 100),
  name: "",
  email: "",
  password: "",
  tasks: 0,
};

export const useUser = () => {
  const [user, setUser] = useState<UserType["user"]>(emptyUserData);
  const [users, setUsers] = useState<UserType["user"][]>([]);

  const registrationUser = (data: any) => {
    axios
      .post("http://localhost:8000/users", data)
      .then(function () {
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // get user from localStorage
  useEffect(() => {
    const connectedUser = localStorage.getItem("user");
    if (connectedUser !== null) {
      const data = JSON.parse(connectedUser);
      setUser(data);
    } else {
      console.log("La clé n'existe pas dans le localStorage");
    }
  }, []);

  // get all users from DB
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const loginUser = () => {
  //   console.log("loginUser");
  // };

  return {
    user,
    setUser,
    registrationUser,
  };
};
