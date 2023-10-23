import { Card, Button, Typography } from "@material-tailwind/react";
import { InputField } from "./reusable/Input";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { appContext } from "../context/appContext";
import { User } from "../types";

export function LoginForm() {
  const { loginUser, setComponentToDisplay } = useContext(appContext);
  const [formData, setFormData] = useState<Partial<User>>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginUser) {
      loginUser(formData);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Hello ! Enter your details to login.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-4">
          <InputField
            typographie="Your Email"
            type="email"
            name="email"
            placeholder="name@mail.com"
            change={handleChange}
          />
          <InputField
            typographie="Password"
            type="password"
            name="password"
            placeholder="********"
            change={handleChange}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already you d'ont have an account?{" "}
          <a
            className="font-medium text-gray-900 cursor-pointer"
            onClick={() => {
              setComponentToDisplay && setComponentToDisplay("signIn");
            }}
          >
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
