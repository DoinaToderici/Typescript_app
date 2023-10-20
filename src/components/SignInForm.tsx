import { Card, Button, Typography } from "@material-tailwind/react";
import { InputField } from "./reusable/Input";
import {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { appContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

export function SignInForm() {
  const { emptyUserData, registrationUser, setComponentToDisplay } =
    useContext(appContext);
  const [formData, setFormData] = useState<Object>(emptyUserData);
  const registrationForm: MutableRefObject<any> = useRef();
  const form: HTMLFormElement = registrationForm.current;
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData !== emptyUserData) {
      registrationUser(formData);
      form.reset();
      // if (userConnected) {
      //   navigate("/dashboard");
      // }
    }
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
        ref={registrationForm}
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
          <a
            onClick={() => {
              setComponentToDisplay("login");
            }}
            className="font-medium text-gray-900 cursor-pointer"
          >
            Login In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
