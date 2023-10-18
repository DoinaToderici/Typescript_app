import React, { FunctionComponent } from "react";
import { Input, Typography } from "@material-tailwind/react";

type InputProps = {
  typographie: string;
  type: string;
  placeholder: string;
};

export const InputField: FunctionComponent<InputProps> = ({
  typographie,
  type,
  placeholder,
}) => {
  return (
    <>
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        {typographie}
      </Typography>
      <Input
        crossOrigin=""
        type={type}
        size="lg"
        placeholder={placeholder}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </>
  );
};
