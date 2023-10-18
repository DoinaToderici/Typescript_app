import { FunctionComponent, PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
  name?: string;
}>;

// Le type d'un seter react ex: setSeter()
// setSeter:Dispatch<setStateAction<number>>

export const Form: FunctionComponent<FormProps> = ({ children }) => {
  return (
    <div>
      <h1 className="decoration-white">Form Component</h1>
      {children}
    </div>
  );
};
