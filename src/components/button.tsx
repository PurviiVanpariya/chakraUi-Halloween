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
            transition! duration-500! cursor-pointer! rounded-full
           ${variant === "default" && "h-10 sm:h-12 bg-primary! text-[#7f479a]! shadow-primaryBtn"}
           ${variant === "icon" && "size-9 sm:size-10 bg-transparent! text-primary! hover:text-[#2c0047]! hover:bg-primary! border! border-primary! flex items-center justify-center"}
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
