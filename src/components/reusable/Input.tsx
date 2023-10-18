import {
  ChangeEventHandler,
  FunctionComponent,
  HTMLInputTypeAttribute,
} from "react";
import { Input, Typography } from "@material-tailwind/react";

type InputProps = {
  typographie: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  change: ChangeEventHandler<HTMLInputElement>;
};

export const InputField: FunctionComponent<InputProps> = ({
  typographie,
  type,
  name,
  placeholder,
  change,
}) => {
  return (
    <>
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        {typographie}
      </Typography>
      <Input
        crossOrigin=""
        type={type}
        name={name}
        size="lg"
        placeholder={placeholder}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        onChange={change}
      />
    </>
  );
};
