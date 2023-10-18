import { FunctionComponent, PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
  name?: string;
}>;

// Le type d'un seter react ex: setSeter()
// setSeter:Dispatch<setStateAction<number>>

export const LoginForm: FunctionComponent<FormProps> = () => {
  return <></>;
};
