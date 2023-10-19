import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

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

  return {
    user,
    setUser,
    registrationUser,
  };
};
