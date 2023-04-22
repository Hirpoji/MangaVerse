import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  classes?: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, classes, onclick }) => {
  return (
    <button
      className={`border-none px-6 py-2 rounded-45 font-medium text-base leading-19 gap-x-1 ${classes}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
