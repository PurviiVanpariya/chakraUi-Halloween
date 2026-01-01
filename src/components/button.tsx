import React from "react";

type ButtonProps = {
  variant?: "default" | "icon" | "outline" | "white-contained" | "curvedFilled" | "curvedOutline" | "borderCut";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  onClick,
  className,
  type,
  ...props
}) => {
  const buttonClassNames = `
           h-10 sm:h-12 transition duration-500 cursor-pointer rounded-full px-4
           ${variant === "default" && "bg-primary text-[#7f479a] text-xl shadow-primaryBtn"}
           ${className && className}
       `;
  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClassNames}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
