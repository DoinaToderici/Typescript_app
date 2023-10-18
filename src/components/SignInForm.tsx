import { Card, Button, Typography } from "@material-tailwind/react";
import { InputField } from "./reusable/Input";

export function SignInForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-4">
          <InputField
            typographie="Your Name"
            type="text"
            placeholder="Your first name"
          />
          <InputField
            typographie="Your Email"
            type="email"
            placeholder="name@mail.com"
          />
          <InputField
            typographie="Password"
            type="password"
            placeholder="********"
          />
        </div>

        <Button className="mt-6" fullWidth>
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
