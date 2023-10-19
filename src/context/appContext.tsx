import { createContext } from "react";
import { useUser } from "../hooks/useUser";

const emptyUserData = {
  id: Math.floor(Math.random() * 100),
  name: "",
  email: "",
  password: "",
  tasks: 0,
};

// create context and set default value
export const appContext = createContext<any>({
  user: emptyUserData,
  setUser: undefined,
});

// create provider context function()
export const AppProvider = ({ children }: any) => {
  const { user, setUser, registrationUser } = useUser(0);
  return (
    <appContext.Provider
      value={{ emptyUserData, user, setUser, registrationUser }}
    >
      {children}
    </appContext.Provider>
  );
};
