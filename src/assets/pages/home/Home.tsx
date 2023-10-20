import { useContext } from "react";
import { LoginForm } from "../../../components/LoginForm";
import { SignInForm } from "../../../components/SignInForm";
import { appContext } from "../../../context/appContext";

export default function Home() {
  const { componentToDisplay } = useContext(appContext);

  return (
    <div className="home container mx-auto flex justify-center items-center">
      <div className="form-connection py-20">
        <h1 className="text-center text-5xl mb-10">Hey !</h1>
        {componentToDisplay === "login" ? <LoginForm /> : <SignInForm />}
      </div>
    </div>
  );
}
