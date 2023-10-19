import React from "react";
import { LoginForm } from "../../../components/LoginForm";
import { SignInForm } from "../../../components/SignInForm";

export default function Home() {
  return (
    <div className="home flex justify-center items-center">
      <div className="form-connection py-20">
        <LoginForm />
      </div>
    </div>
  );
}
