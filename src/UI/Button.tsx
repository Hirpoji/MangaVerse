import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  classes?: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, classes, onclick }) => {
  return (
    <button
      className={`border-none px-6 py-2 rounded-full font-medium text-base leading-19 flex  items-center gap-x-2  ${classes}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
