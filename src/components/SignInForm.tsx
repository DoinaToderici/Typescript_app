import { Card, Button, Typography } from "@material-tailwind/react";
import { InputField } from "./reusable/Input";
import { ChangeEvent, FormEvent, useState } from "react";

const EMPTY_USER_DATA = {
  id: Math.floor(Math.random() * 100),
  name: "",
  email: "",
  pasword: "",
  tasks: 0,
};

export function SignInForm() {
  const [formData, setFormData] = useState<Object>(EMPTY_USER_DATA);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-4">
          <InputField
            typographie="Your Name"
            type="text"
            name="name"
            placeholder="Your first name"
            change={handleChange}
          />
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
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
